from fastapi import APIRouter
from schemas.users import userAuth

router = APIRouter()

@router.post('/login')
async def accept_login(payload:dict):
    email = payload.get("user_email")
    password = payload.get("user_pass")
    return {"Email" : email, "password" : password}