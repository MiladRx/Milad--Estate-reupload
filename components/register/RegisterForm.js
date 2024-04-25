"use client";

import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const password = z
  .string()
  .min(6, {
    message: "Adgangskoden skal være på mindst 6 tegn.",
  })
  .max(10, {
    message: "Adgangskoden skal være mindre end 10 tegn.",
  })
  .refine(
    (value) =>
      /[a-z]/.test(value) && /[0-9]/.test(value) && /[^a-zA-Z0-9]/.test(value),
    {
      message:
        "Adgangskoden skal indeholde mindst ét ​​bogstav, ét tal og ét specialtegn.",
    }
  );

  const formSchema = z.object({
    firstName: z
      .string()
      .refine((value) => /^[A-Za-z\s]+$/.test(value), {
      message: "Fulde navn må kun indeholde bogstaver.",
    }),
    email: z.string().email({
      message: "ugyldig emailadresse.",
    }),
    password: password,
    confirmPassword: z.string(),
  }).refine(data => data.password === data.confirmPassword, {
    message: "Adgangskoder stemmer ikke overens",
    path: ['confirmPassword'] // point the error to 'confirmPassword' field
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

export default function RegisterForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
    mode: "onChange",
  });

  // 2. Define a submit handler.
  function onSubmit(values) {
    console.log(values);
  }

  return (
    <div className="mx-[30rem] border border-[D3DEE8] h-auto px-48 py-20 my-36">
      <Form {...form}>
        <div className="text-center font-bold text-3xl mb-12">
          Opret bruger hos Din Mægler
        </div>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field , fieldState: { error } }) => (
              <FormItem>
                <FormLabel className="text-[1.2rem]">Fulde navn</FormLabel>
                <FormControl>
                  <Input placeholder="Fulde navn" {...field} className="w-full rounded text-[1.2rem] h-16"/>
                </FormControl>
                <FormMessage>{error?.message}</FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field , fieldState: { error }}) => (
              <FormItem>
                <FormLabel className="text-[1.2rem]">Email adresse</FormLabel>
                <FormControl>
                  <Input placeholder="Email adresse" {...field} className="w-full rounded text-[1.2rem] h-16"/>
                </FormControl>
                <FormMessage>{error?.message}</FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field , fieldState: { error }}) => (
              <FormItem>
                <FormLabel className="text-[1.2rem]">Password</FormLabel>
                <FormControl>
                  <Input placeholder="Password" {...field} className="w-full rounded text-[1.2rem] h-16"/>
                </FormControl>
                <FormMessage>{error?.message}</FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field , fieldState: { error }}) => (
              <FormItem>
                <FormLabel className="text-[1.2rem]">Bekræft password</FormLabel>
                <FormControl>
                  <Input placeholder="Bekræft password" {...field} className="w-full rounded text-[1.2rem] h-16"/>
                </FormControl>
                <FormMessage>{error?.message}</FormMessage>
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full rounded bg-[#162A41] h-16 text-[1.1rem]">
            Opret bruger
          </Button>
        </form>
      </Form>
    </div>
  );
}
