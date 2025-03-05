export const notFound = (req, res, next) =>{
    res.status(404).json({error:"Route not found"});
};

export const errorHandler = (err, req, res, next) =>{
    const statusCode = res.statusCode == 200 ? 500 : res.statusCode;
    res.status(statusCode).json({ error : err.message});
};