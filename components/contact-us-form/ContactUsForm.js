"use client";

import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Link from "next/link";

const formSchema = z.object({
  firstName: z.string().refine((value) => /^[A-Za-z\s]+$/.test(value), {
    message: "Fulde navn må kun indeholde bogstaver.",
  }),
  email: z.string().email({
    message: "ugyldig emailadresse.",
  }),
  subject: z.string(),
  message: z.string().max(250, {
    message: "Adgangskoden skal være mindre end 150 tegn.",
  }),
});

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

export default function ContactUsForm({ isAgant }) {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
    mode: "onChange",
  });

  // 2. Define a submit handler.
  function onSubmit(values) {
    // console.log(values);
  }
  return (
    <div className="p-5">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
          <div className="flex justify-between">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field, fieldState: { error } }) => (
                <FormItem>
                  <FormLabel className="text-[1.2rem]">Navn</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Indtast dit navn"
                      {...field}
                      className="w-[15rem] rounded text-[1.2rem] h-16"
                    />
                  </FormControl>
                  <FormMessage>{error?.message}</FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field, fieldState: { error } }) => (
                <FormItem>
                  <FormLabel className="text-[1.2rem]">
                    Indtast din email
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Indtast din email"
                      {...field}
                      className="w-[15rem] rounded text-[1.2rem] h-16"
                    />
                  </FormControl>
                  <FormMessage>{error?.message}</FormMessage>
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[1.2rem]">Emne</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Indtast emne"
                    {...field}
                    className="rounded text-[1.2rem] h-16"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[1.2rem]">Besked</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Indtast din besked... "
                    {...field}
                    className="rounded text-[1.2rem] h-48"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          {isAgant === 'true' && (
            <div className="pb-2">
              <Checkbox className="border rounded border-gray-300 mr-3 h-6 w-6" />
              <FormLabel className="text-gray-700 text-md">
                Ja tak, jeg vil gerne modtage Din Mæglers nyhedsbrev.
              </FormLabel>
            </div>
          )}
          <Button
            type="submit"
            className="w-48 rounded bg-[#162A41] h-16 text-[1.1rem] !mt-8"
          >
            Send besked
          </Button>
        </form>
      </Form>
    </div>
  );
}
