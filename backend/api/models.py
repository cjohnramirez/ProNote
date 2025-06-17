from sqlalchemy import Column, Integer, String, ForeignKey, Table
from sqlalchemy.orm import relationship
from .database import Base

category_note_association = Table(
    "category_note",
    Base.metadata,
    Column("category_id", Integer, ForeignKey("categories.id")),
    Column("notes_id", Integer, ForeignKey("routines.id")),
)


class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, index=True)
    hashed_password = Column(String)


class Category(Base):
    __tablename__ = "categories"
    id = Column(Integer, primary_key=True, index=True)
    created_by = Column(Integer, ForeignKey("users.id"))
    name = Column(String, index=True)
    description = Column(String, index=True)
    notes = relationship(
        "Note", secondary=category_note_association, back_populates="notes"
    )


class Note(Base):
    __tablename__ = "notes"
    id = Column(Integer, primary_key=True, index=True)
    created_by = Column(Integer, ForeignKey("users.id"))
    title = Column(String, index=True)
    description = Column(String, index=True)
    categories = relationship(
        "Category", secondary=category_note_association, back_populates="categories"
    )


Category.notes = relationship(
    "Note", secondary=category_note_association, back_populates="notes"
)
