import axios from "axios";
import { useState, useEffect } from "react";

export const useHttp = (url, dependencies) => {
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedData, setFetchedData] = useState(null);

  useEffect(() => {
    // if (!localStorage["randomUsersData"]) {
    setIsLoading(true);
    axios
      .get(url)
      .then(response => {
        if (!response.status === 200) {
          throw new Error("Failed to fetch.");
        }
        return response;
      })
      .then(data => {
        setIsLoading(false);
        setFetchedData(data);
        return data;
      })
      .catch(err => {
        setIsLoading(false);
      });
    // }
  }, dependencies);

  return [isLoading, fetchedData];
};
