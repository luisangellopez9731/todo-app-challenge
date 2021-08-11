import { useState } from "react";
import { InsertTodo } from "@/entities";
import { todoService } from "@/services";

const remindOptions = [
  "10 minutes",
  "30 minutes",
  "1 hour",
  "3 hour",
  "12 hour",
  "1 day",
];

const repeatOptions = ["Weekly", "Workdays", "Weekend"];

const initialValues = {
  title: "",
  deadline: new Date(),
  startTime: new Date(),
  endTime: new Date(),
  remind: remindOptions[0] as any,
  repeat: repeatOptions[0] as any,
};

export const useForm = (onCreated: any) => {
  const [formValues, setFormValues] = useState<InsertTodo>(initialValues);

  const onSubmit = async () => {
    await todoService.add(formValues as any);
    onCreated();
  };

  const setField = (field: any, value: any) => {
    setFormValues((formValues) => ({ ...formValues, [field]: value }));
  };

  return {
    formValues,
    onSubmit,
    setField,
    remindOptions,
    repeatOptions,
  };
};
