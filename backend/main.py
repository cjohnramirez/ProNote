from fastapi import FastAPI, Query
from enum import Enum
from pydantic import BaseModel
from typing import Annotated


class ModelName(str, Enum):
    alexnet = "alexnet"
    resnet = "resnet"
    lenet = "lenet"


class Item(BaseModel):
    name: str
    description: str | None = None
    price: float
    tax: float | None = None


fake_items_db = [{"item_name": "Foo"}, {"item_name": "Bar"}, {"item_name": "Baz"}]

app = FastAPI()


@app.get("/models/{model_name}")
async def get_model(model_name: ModelName):
    if model_name is ModelName.alexnet:
        return {"model_name": model_name, "message": "Deep Learning FTW!"}

    if model_name.value == "lenet":
        return {"model_name": model_name, "message": "LeCNN all the images"}

    return {"model_name": model_name, "message": "Have some residuals"}


from typing import List, Optional


@app.get("/items/{item_id}")
async def read_amazing_item(
    item_id: str, q: Annotated[List[str], Query()] = None, short: bool = False
):
    item = {"item_id": item_id, "q": q}
    if q:
        item.update({"q": [s + "-id-" + item_id for s in q]})
    if not short:
        item.update({"description": "Wow so amazing really huhuhu"})
    return item


@app.post("/items/new/")
async def create_item(item: Item):
    item_dict = item.dict()
    if item.tax is not None:
        price_with_tax = item.price + item.tax
        item_dict.update({"price_with_tax": price_with_tax})
    return item_dict
