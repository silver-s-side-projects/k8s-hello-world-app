from fastapi import FastAPI, Depends, HTTPException
from pydantic import BaseModel
from sqlalchemy.orm import Session
import uvicorn

from database import get_db, Name

app = FastAPI()

class NameRequest(BaseModel):
    name: str

class NameResponse(BaseModel):
    message: str
    name: str

@app.get("/")
def read_root():
    return {"message": "Hello World"}

@app.post("/names", response_model=NameResponse)
def create_name(name_request: NameRequest, db: Session = Depends(get_db)):
    new_name = Name(name=name_request.name)
    db.add(new_name)
    db.commit()
    db.refresh(new_name)
    return {"message": f"{new_name.name} Hello World", "name": new_name.name}

@app.get("/names")
def get_names(db: Session = Depends(get_db)):
    names = db.query(Name).all()
    return [{"id": name.id, "name": name.name} for name in names]

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)