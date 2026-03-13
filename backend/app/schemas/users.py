from pydantic import BaseModel

class userAuth(BaseModel):
    user_email: str
    user_pass: str