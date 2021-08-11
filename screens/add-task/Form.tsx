import React, { useState } from "react";
import {
  Input,
  Layout,
  Datepicker,
  Select,
  SelectItem,
  IndexPath,
  Text,
} from "@ui-kitten/components";
import { todoService } from "@/services";
import { InsertTodo } from "@/entities";
import { FC } from "react";
import { Button } from "@/components";

const remindOptions = [
  "10 minutes",
  "30 minutes",
  "1 hour",
  "3 hour",
  "12 hour",
  "1 day",
];

const repeatOptions = ["Weekly", "Workdays", "Weekend"];

export interface FormProps {
  onCreated: () => void;
}

export const Form: FC<FormProps> = ({ onCreated }) => {
  const [formValues, setFormValues] = useState<InsertTodo>({
    title: "",
    deadline: new Date(),
    startTime: new Date(),
    endTime: new Date(),
    remind: remindOptions[0],
    repeat: repeatOptions[0],
  });

  const onSubmit = async () => {
    await todoService.add(formValues as any);
    onCreated();
  };

  const setField = (field: any, value: any) => {
    setFormValues((formValues) => ({ ...formValues, [field]: value }));
  };
  return (
    <Layout style={{ flex: 1, paddingHorizontal: 20, paddingBottom: 20 }}>
      <Layout style={{ flex: 1, paddingHorizontal: 20 }}>
        <Input
          style={{ marginVertical: 16 }}
          label={() => <Text style={{ fontWeight: "bold" }}>Title</Text>}
          value={formValues.title}
          onChangeText={(value) => setField("title", value)}
        />
        <Datepicker
          style={{ marginBottom: 16 }}
          label={() => <Text style={{ fontWeight: "bold" }}>Deadline</Text>}
          date={formValues.deadline}
          onSelect={(date) => setField("deadline", date)}
        />
        <Layout
          style={{
            flex: 0,
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 16,
          }}
        >
          <Datepicker
            label={() => <Text style={{ fontWeight: "bold" }}>Start Time</Text>}
            date={formValues.startTime}
            onSelect={(date) => setField("startTime", date)}
          />
          <Datepicker
            label={() => <Text style={{ fontWeight: "bold" }}>End Time</Text>}
            date={formValues.endTime}
            onSelect={(date) => setField("endTime", date)}
          />
        </Layout>
        <Select
          style={{ marginBottom: 16 }}
          label={() => <Text style={{ fontWeight: "bold" }}>Remind</Text>}
          value={formValues.remind}
          onSelect={(index) =>
            setField("remind", remindOptions[parseInt(index.toString()) - 1])
          }
        >
          {remindOptions.map((option) => (
            <SelectItem key={option} title={option} />
          ))}
        </Select>
        <Select
          style={{ marginBottom: 16 }}
          label={() => <Text style={{ fontWeight: "bold" }}>Repeat</Text>}
          value={formValues.repeat}
          onSelect={(index) =>
            setField("repeat", repeatOptions[parseInt(index.toString()) - 1])
          }
        >
          {repeatOptions.map((option) => (
            <SelectItem key={option} title={option} />
          ))}
        </Select>
      </Layout>
      <Button onPress={onSubmit}>Create a Task</Button>
    </Layout>
  );
};
