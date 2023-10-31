import { z } from "zod";

export const AnouncementShema = z.object({
    id: z.string(),
    marca: z.string(),
    modelo: z.string(),
    ano: z.number(),
    combustivel: z.string(),
    quilometragem: z.string(),
    cor: z.string(),
    precoTabelaFip: z.string(),
    preco: z.number(),
    descricao: z.string(),
    imagem: z.string(),
    publicado: z.string(),
    userId:z.string(),
  });

  export type AnouncementData = z.infer<typeof AnouncementShema>;

  export const AnouncementShemaRequest = AnouncementShema.omit({
    id: true,

  })