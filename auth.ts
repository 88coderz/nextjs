import NextAuth from "next-auth"

// https://authjs.dev/getting-started/installation#configure
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [],
})