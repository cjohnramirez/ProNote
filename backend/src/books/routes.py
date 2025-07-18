from fastapi import APIRouter, status, Depends
from sqlalchemy.ext.asyncio.session import AsyncSession
from fastapi.exceptions import HTTPException
from typing import List
from src.books.service import BookService
from src.db.main import get_session
from src.books.schemas import BookModel, BookUpdateModel, BookCreateModel

book_router = APIRouter()
book_service = BookService()


@book_router.get("/", response_model=List[BookModel])
async def get_all_books(session: AsyncSession = Depends(get_session)):
    books = await book_service.get_all_books(session)
    return books


@book_router.post("/", status_code=status.HTTP_201_CREATED, response_model=BookModel)
async def create_a_book(
    book_data: BookCreateModel, session: AsyncSession = Depends(get_session)
) -> dict:
    new_book = await book_service.create_book(book_data, session)
    return new_book


@book_router.get("/{book_uid}", response_model=BookModel)
async def get_book(book_uid: str, session: AsyncSession = Depends(get_session)) -> dict:
    book = await book_service.get_book(book_uid, session)

    if book:
        return book
    else:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Book not found",
        )


@book_router.patch("/{book_uid}", response_model=BookModel)
async def update_book(
    book_uid: str,
    book_update_data: BookUpdateModel,
    session: AsyncSession = Depends(get_session),
) -> dict:
    updated_book = await book_service.update_book(book_uid, book_update_data, session)

    if updated_book:
        return updated_book
    else:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail="Book not found"
        )


@book_router.delete("/{book_uid}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_book(book_uid: str, session: AsyncSession = Depends(get_session)):
    book_to_delete = await book_service.delete_book(book_uid, session)

    if book_to_delete:
        return book_to_delete
    else:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail="Book not found"
        )
