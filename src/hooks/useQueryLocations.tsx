import { useQuery } from "@tanstack/react-query";
import { getLocations } from "../api/api";

export default function useQuerylocations() {
  const {
    data: locations,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["Locations"],
    queryFn: getLocations,
  });

  return {
    locations,
    error,
    isLoading,
  };
}
