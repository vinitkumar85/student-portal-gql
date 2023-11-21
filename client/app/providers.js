'use client';

import { ApolloProvider } from "@apollo/client";
import { client } from "../lib/utils";

export default function Providers({ children }) {
 return (
    <ApolloProvider client={client}>
        {children}
  </ApolloProvider>
  )
}
