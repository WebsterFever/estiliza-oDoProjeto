import { z } from "zod";
import { AnouncementShema } from "./anouncement.schema";

export const UserSchema = z.object({
    id: z.string(),
    name: z.string(),
    email: z.string(),
    cpf: z.string(),
    celular: z.string(),
    dataDeNasciment:z.string(),
    descricao: z.string(),
    endereco: z.string(),
    tipoDeConta: z.string(),
    anouncements: AnouncementShema,
    password: z.string(),
})

export const LoginSchema = UserSchema.omit({
    id: true,
    name: true,
    cpf: true,
    celular: true,
    dataDeNasciment: true,
    descricao: true,
    endereco: true,
    tipoDeConta: true,
    anouncements: true
  });

export type UserData = z.infer<typeof UserSchema>;
export type LoginData = z.infer<typeof UserSchema>;

export const UserSchemaRequest = UserSchema.omit({
    id: true,
})