import os
from typing import List
from motor.motor_asyncio import AsyncIOMotorClient
from pyobjectId import PyObjectId
from fastapi import FastAPI,Body,HTTPException,status
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse
from schemas import User, Ad#, UpdateUser, UpdateAd

app = FastAPI()
client = AsyncIOMotorClient("mongodb+srv://daniil:daniil@cluster0.pzwxf.mongodb.net/blog?retryWrites=true&w=majority")
db = client.app


@app.get("/users_get",response_description="Getting all users",response_model=List[User])
async def get_users():
    users = await db['users'].find().to_list(100)
    return users


@app.get("/ads_get",response_description="Getting all ads",response_model=List[Ad])
async def get_ads():
    ads = await db['ads'].find().to_list(100)
    return ads

@app.post("/user_create",response_description="Add new user",response_model=User)
async def insert_user(user:User):
    user = jsonable_encoder(user)
    new_user = await db["users"].insert_one(user)
    created_user = await db["users"].find_one({"_id":new_user.inserted_id})
    return JSONResponse(status_code =status.HTTP_201_CREATED,content=created_user)


@app.post("/ad_create",response_description="Add new ad",response_model=Ad)
async def insert_ad(ad:Ad):
    ad = jsonable_encoder(ad)
    new_ad = await db["ads"].insert_one(ad)
    created_ad = await db["ads"].find_one({"_id":new_ad.inserted_id})
    return JSONResponse(status_code=status.HTTP_201_CREATED,content=created_ad)


'''@app.put("/user_change", response_description="Update user", response_model=User)
async def update_user(id: str, user: UpdateUser = Body(...)):
    user = {k: v for k, v in user.dict().items() if v is not None}
    if len(user) >= 1:
        update_result = await db["users"].update_one({"_id": id}, {"$set": user})
        if update_result.modified_count == 1:
            if (
                updated_user := await db["users"].find_one({"_id": id})
            ) is not None:
                return updated_user
    if (existing_user := await db["users"].find_one({"_id": id})) is not None:
        return existing_user
    raise HTTPException(status_code=404, detail=f"User {id} not found")


@app.put("/ad_change", response_description="Update ad", response_model=Ad)
async def update_ad(id: str, ad: UpdateAd = Body(...)):
    ad = {k: v for k, v in ad.dict().items() if v is not None}
    if len(ad) >= 1:
        update_result = await db["ads"].update_one({"_id": id}, {"$set": ad})
        if update_result.modified_count == 1:
            if (
                updated_ad := await db["ads"].find_one({"_id": id})
            ) is not None:
                return updated_ad
    if (existing_ad := await db["ads"].find_one({"_id": id})) is not None:
        return existing_ad
    raise HTTPException(status_code=404, detail=f"Ad {id} not found")


@app.delete("/user_delete", response_description="Delete user")
async def delete_user(id: str):
    delete_result = await db["users"].delete_one({"_id": id})
    if delete_result.deleted_count == 1:
        return JSONResponse(status_code=status.HTTP_204_NO_CONTENT)
    raise HTTPException(status_code=404, detail=f"User {id} not found")


@app.delete("/ad_delete", response_description="Delete ad")
async def delete_ad(id: str):
    delete_result = await db["ads"].delete_one({"_id": id})
    if delete_result.deleted_count == 1:
        return JSONResponse(status_code=status.HTTP_204_NO_CONTENT)
    raise HTTPException(status_code=404, detail=f"Ad {id} not found")'''