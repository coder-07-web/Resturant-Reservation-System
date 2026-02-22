import ErrorHandler from "../error/error.js";
import { Reservation } from "../models/resevationSchema.js";

export const sendReservation = async (req, res, next) => {
  
   
    const { firstName, lastName, email, phone, date, time } = req.body;

    if (!firstName || !lastName || !email || !phone || !date || !time) {
      return next(new ErrorHandler("Please fill all the reservation form fields!", 400));
    }
    try{
    await Reservation.create({ firstName, lastName, email, phone, date, time });

    return res.status(200).json({
  success: true,
  message: "Reservation Successful!",
});

  } catch (error) {
    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map(err => err.message);
      return next(new ErrorHandler(validationErrors.join(" , "), 400));
    }
    return next(error);
  
  }
};
