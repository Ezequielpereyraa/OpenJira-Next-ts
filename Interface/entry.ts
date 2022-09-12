
export type entryStatus = "pending" | "inProgress" | "done";

export interface Entry {
 _id: string;
 description: string;
 createdAt: number;
 status: entryStatus
}