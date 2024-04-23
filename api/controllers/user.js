
export const postRegister = (req, res) => {
    try {
        console.log("postRegister Ok");
        res.status(200).send({
            status: "success",
            data: [],
            message: "User register process Ok"
        });
    } catch (error) {
        res.status(500).send({
            status: "Error",
            message: "Internal Server Error"
        });
    }
};

export const postLogin = (req, res) => {
    try {
        console.log("postLogin Ok");
        res.status(200).send({
            status: "success",
            data: [],
            message: "User login process Ok"
        });
    } catch (error) {
        res.status(500).send({
            status: "Error",
            message: "Internal Server Error"
        });
    }
};

export const getLogout = (req, res) => {
    try {
        console.log("getLogout Ok");
        res.status(200).send({
            status: "success",
            data: [],
            message: "User logout process Ok"
        });
    } catch (error) {
        res.status(500).send({
            status: "Error",
            message: "Internal Server Error"
        });
    }
};