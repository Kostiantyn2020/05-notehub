import axios from "axios";
import type { AxiosResponse } from "axios";
import type { Note } from "../types/note";

axios.defaults.baseURL = "https://notehub-public.goit.study/api";
axios.defaults.headers.common.Authorization = `Bearer ${
  import.meta.env.VITE_NOTEHUB_TOKEN
}`;

export interface FetchNotesParams {
  page: number;
  perPage: number;
  search?: string;
}

export interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}

export const fetchNotes = async (
  params: FetchNotesParams
): Promise<FetchNotesResponse> => {
  const response: AxiosResponse<FetchNotesResponse> = await axios.get(
    "/notes",
    { params }
  );
  return response.data;
};

export interface CreateNoteData {
  title: string;
  content: string;
  tag: string;
}

export const createNote = async (data: CreateNoteData): Promise<Note> => {
  const response: AxiosResponse<Note> = await axios.post("/notes", data);
  return response.data;
};

export const deleteNote = async (id: string): Promise<Note> => {
  const response: AxiosResponse<Note> = await axios.delete(`/notes/${id}`);
  return response.data;
};
