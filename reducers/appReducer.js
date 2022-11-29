import {  SET_DAYS, SIGNED_IN, SIGNED_OUT, USER_DATA } from "../action/types";

const initialState = {
  days: [
    {
      id: 0,
      date: "2022-12-01",
      timeSlot: [
        {
          id: 0,
          time: "9:00 AM",
          isBooked: false,
          isSelected: false,
        },
        {
          id: 1,
          time: "10:00 AM",
          isBooked: false,
          isSelected: false,
        },
        {
          id: 2,
          time: "11:00 AM",
          isBooked: false,
          isSelected: false,
        },
        {
          id: 3,
          time: "12:00 PM",
          isBooked: false,
          isSelected: false,
        },
        {
          id: 4,
          time: "1:00 PM",
          isBooked: false,
          isSelected: false,
        },
        {
          id: 5,
          time: "2:00 PM",
          isBooked: false,
          isSelected: false,
        },
        {
          id: 6,
          time: "3:00 PM",
          isBooked: false,
          isSelected: false,
        },
      ],
    },
    {
      id: 1,
      date: "2022-11-29",
      timeSlot: [
        {
          id: 0,
          time: "9:00 AM",
          isBooked: false,
          isSelected: false,
        },
        {
          id: 1,
          time: "10:00 AM",
          isBooked: false,
          isSelected: false,
        },
        {
          id: 2,
          time: "11:00 AM",
          isBooked: false,
          isSelected: false,
        },
        {
          id: 3,
          time: "12:00 PM",
          isBooked: false,
          isSelected: false,
        },
        {
          id: 4,
          time: "1:00 PM",
          isBooked: false,
          isSelected: false,
        },
        {
          id: 5,
          time: "2:00 PM",
          isBooked: false,
          isSelected: false,
        },
        {
          id: 6,
          time: "3:00 PM",
          isBooked: false,
          isSelected: false,
        },
      ],
    },
    {
      id: 3,
      date: "2022-11-29",
      timeSlot: [
        {
          id: 0,
          time: "9:00 AM",
          isBooked: false,
          isSelected: false,
        },
        {
          id: 1,
          time: "10:00 AM",
          isBooked: false,
          isSelected: false,
        },
        {
          id: 2,
          time: "11:00 AM",
          isBooked: false,
          isSelected: false,
        },
        {
          id: 3,
          time: "12:00 PM",
          isBooked: false,
          isSelected: false,
        },
        {
          id: 4,
          time: "1:00 PM",
          isBooked: false,
          isSelected: false,
        },
        {
          id: 5,
          time: "2:00 PM",
          isBooked: false,
          isSelected: false,
        },
        {
          id: 6,
          time: "3:00 PM",
          isBooked: false,
          isSelected: false,
        },
      ],
    },
  ],
  totalBookings: null,
  isSignedIn: false,
  userData: "",
};

export const appReducer = (state = initialState, action) => {
  console.log(state.isSignedIn);
  switch (action.type) {
    case SET_DAYS:
      return {
        ...state,
        days: action.payload,
      };
    case SIGNED_IN:
      return { ...state, isSignedIn: action.payload };
    case SIGNED_OUT:
      return { ...state, isSignedIn: action.payload };
      case USER_DATA:
        return {...state, userData: action.payload}
    default:
      return {
        ...state,
      };
  }
};
