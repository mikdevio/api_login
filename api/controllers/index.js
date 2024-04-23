
export const getApi = (req, res) => {
    try {
        res.set("Content-Security-Policy", "default-src 'self'");
        res.status(200).json({
            status: "success",
            data: [],
            message: "Welcome to this API!!",
        });
    } catch (error) {
        res.status(500).send({
           status: "Server error",
           message: "Internal Server Error", 
        });
    }
};