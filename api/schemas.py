from pydantic import BaseModel,Field,EmailStr
from pyobjectId import PyObjectId
from bson import ObjectId
from datetime import date as dat
from typing import Optional

class User(BaseModel):
    id:PyObjectId = Field(default_factory=PyObjectId,alias='_id')
    login:str = Field(...)
    password:str = Field(...)
    class Config:
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}
        schema_extra = {
            "example": {
                "login": "student",
                "password": "12345"
            }
        }

class Ad(BaseModel):
    id:PyObjectId = Field(default_factory=PyObjectId,alias='_id')
    title:str = Field(...)
    task:str = Field(...)
    budjet:str = Field(...)
    deadline:dat = Field(...)
    contacts:str = Field(...)
    date:dat = Field(...)
    owner:PyObjectId = Field(default_factory=PyObjectId)
    class Config:
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}
        schema_extra = {
            "example": {
                "title": "Сделать сложнейшую лабу",
                "task": "Сложная лаба по сложному предмету",
                "budjet": "100500",
                "deadline": "2021-06-11",
                "contacts": "student@ssau.ru",
                "date": "2021-06-02",
                "owner": "60b6b7b473293b2a61a2b9b2"
            }
        }

'''class UpdateUser(BaseModel):
    login: Optional[str]
    password: Optional[str]
    class Config:
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}
        schema_extra = {
            "example": {
                "login": "student",
                "password": "12345"
            }
        }

class UpdateAd(BaseModel):
    title:Optional[str]
    task:Optional[str]
    budjet:Optional[str]
    deadline:Optional[dat]
    contacts:Optional[str]
    date:Optional[dat]
    class Config:
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}
        schema_extra = {
            "example": {
                "title": "Сделать сложнейшую лабу",
                "task": "Сложная лаба по сложному предмету",
                "budjet": "100500",
                "deadline": "2021-06-11",
                "contacts": "student@ssau.ru",
                "date": "2021-06-02",
                "owner": "60b6b7b473293b2a61a2b9b2"
            }
        }'''
