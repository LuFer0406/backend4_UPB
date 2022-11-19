import jwt from "jsonwebtoken";

export const generateToken = (payload) => {
    try {
        const token = jwt.sign(payload, "abc123", {
            expiresIn:"15d",
        });
        return token;
    } catch (error) {
        console.log("Ha sucedido un error en generateToken ", error.message)
    }
}