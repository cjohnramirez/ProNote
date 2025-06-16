from typing import Annotated
from fastapi import Body, FastAPI, status, HTTPException, Request
from fastapi.responses import JSONResponse
from pydantic import BaseModel, Field, EmailStr

app = FastAPI()


class Image(BaseModel):
    url: str
    name: str


class Item(BaseModel):
    name: str
    description: str | None = Field(
        default=None, title="The desc of the item", max_length=255
    )
    price: float = Field(
        gt=0, description="The price must be greater than zero", examples=[35.4]
    )
    tax: float | None = Field(default=None, examples=[3.2])
    tags: set[str] = set()
    image: Image | None = None


@app.put("/items/{item_id}")
async def update_item(
    item_id: int,
    item: Annotated[
        Item,
        Body(
            example={
                "hehehe": {
                    "item_id": "1",
                    "item": {
                        "name": "Fake Item",
                        "description": "This is a fake item for testing.",
                        "price": 99.99,
                        "tax": 9.99,
                        "tags": ["fake", "test"],
                        "image": {
                            "url": "https://example.com/fake-image.png",
                            "name": "Fake Image",
                        },
                    },
                }
            }
        ),
    ],
):
    results = {"item_id": item_id, "item": item}
    return results


@app.get("/items/", response_model=list[Item])
async def read_items() -> any:
    return [{"name": "Portal Gun", "price": 42.0}]


class UserBase(BaseModel):
    username: str
    email: EmailStr
    full_name: str | None = None


class UserIn(UserBase):
    password: str


class UserOut(UserBase):
    pass

class UnicornException(Exception):
    def __init__(self, name: str):
        self.name = name

@app.exception_handler(UnicornException)
async def unicorn_exception_handler(request: Request, exc: UnicornException): 
    return JSONResponse (
        status_code=418,
        content={"message": f"Oops! {exc.name} did something hehehehe."}
    )

@app.post(
    "/user/",
    response_model=UserOut,
    status_code=status.HTTP_201_CREATED,
)
async def create_user(user: UserIn) -> any:
    if user.username in user:
        raise HTTPException(status_code=status.HTTP_226_IM_USED, headers={"Error" : "User already exists"})
    return UserOut
