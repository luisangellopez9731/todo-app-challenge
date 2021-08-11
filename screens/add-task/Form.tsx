import React from "react";
import {
  Input,
  Layout,
  Datepicker,
  Select,
  SelectItem,
  Text,
} from "@ui-kitten/components";
import { FC } from "react";
import { Button } from "@/components";
import { useForm } from "./useForm";

const Label: FC = ({ children }) => {
  return <Text style={{ fontWeight: "bold" }}>{children as string}</Text>;
};

export interface FormProps {
  onCreated: () => void;
}

export const Form: FC<FormProps> = ({ onCreated }) => {
  const { formValues, onSubmit, setField, remindOptions, repeatOptions } =
    useForm(onCreated);
  return (
    <Layout style={{ flex: 1, paddingHorizontal: 20, paddingBottom: 20 }}>
      <Layout style={{ flex: 1, paddingHorizontal: 20 }}>
        <Input
          style={{ marginVertical: 16 }}
          label={<Label>Title</Label>}
          value={formValues.title}
          onChangeText={(value) => setField("title", value)}
        />
        <Datepicker
          style={{ marginBottom: 16 }}
          label={<Label>Deadline</Label>}
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
            label={<Label>Start Time</Label>}
            date={formValues.startTime}
            onSelect={(date) => setField("startTime", date)}
          />
          <Datepicker
            label={<Label>End Time</Label>}
            date={formValues.endTime}
            onSelect={(date) => setField("endTime", date)}
          />
        </Layout>
        <Select
          style={{ marginBottom: 16 }}
          label={<Label>Remind</Label>}
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
          label={<Label>Repeat</Label>}
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
