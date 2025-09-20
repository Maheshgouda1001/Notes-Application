import os
from starlette.middleware.base import BaseHTTPMiddleware
from fastapi import Request
from jose import JWTError, jwt
from fastapi.responses import JSONResponse

ACCESS_SECRET_KEY = os.getenv("SECRET_KEY")
ALGORITHM = os.getenv("ALGORITHM")
class JWTAuthMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request: Request, call_next):
        path = request.url.path
        if path.endswith("/signin") or path.endswith("/signup"):
            return await call_next(request)
        auth_header = request.headers.get("Authorization")
        if not auth_header or not auth_header.startswith("Bearer "):
            return JSONResponse(status_code=401, content={"detail": "Authorization header missing or invalid"})
        token = auth_header.split(" ")[1]
        try:
            payload = jwt.decode(token, ACCESS_SECRET_KEY, algorithms=[ALGORITHM])
            request.state.user = {"email": payload.get("email")}
        except JWTError:
            return JSONResponse(status_code=401, content={"detail": "Invalid or expired token"})
        return await call_next(request)