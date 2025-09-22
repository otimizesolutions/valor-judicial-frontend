"use client";
import { api } from "@/lib/axios";
import { useSuspenseQuery } from "@tanstack/react-query";

export const UsersList = () => {
  const { data: users } = useSuspenseQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await api.get<{
        results: Array<{ id: number; name: string }>;
      }>("/users");
      return data;
    },
  });

  return (
    <div>
      {users.results.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
};
