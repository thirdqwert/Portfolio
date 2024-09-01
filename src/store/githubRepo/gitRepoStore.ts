import { create } from "zustand";
import { devtools } from 'zustand/middleware'
import { IGitRepos } from "../../types/types";
interface IGitRepoStore {
    reposData: IGitRepos[] | null,
    isLoading:boolean,
    setIsLoading:(isLoading:boolean) => void,
    error: any | null,
    setError:(error:any ) => void,
    setReposData: (data: IGitRepos[]) => void,
}
export const gitRepoStore = create<IGitRepoStore>()(devtools((set) => ({
    reposData: null,
    isLoading:false,
    setIsLoading:(isLoading) => set({isLoading:isLoading }),
    error:null,
    setError:(error) => set({error:error}),
    setReposData: (data) => set({ reposData: data})
})))
