export interface input {
    name: string;
    lastName: string;
    email: string;
    phone: number;
    month: number;
    year: number;
}

export interface props{
    input: input
    setInput:  React.Dispatch<React.SetStateAction<input>>
    nextStep: () => number
    prevStep?: () => number
}