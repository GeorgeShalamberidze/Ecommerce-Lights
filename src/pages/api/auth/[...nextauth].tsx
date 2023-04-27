import NextAuth, { User, Session } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import UserModel from "../../../../models/User";
import db from "../../../../utils/db";
import bcryptjs from "bcryptjs";

interface CustomUser extends User {
  isAdmin?: boolean;
  _id?: string;
}

interface CustomSession extends Session {
  isAdmin: boolean;
  _id: string;
  user: CustomUser;
}

export default NextAuth({
  providers: [
    // CredentialsProvider({
    //   async authorize(credentials: any) {
    //     await db.connect();
    //     const user = await UserModel.findOne({
    //       email: credentials!.email,
    //     });
    //     await db.disconnect();
    //     if (
    //       user &&
    //       bcryptjs.compareSync(credentials!.password, user.password)
    //     ) {
    //       return {
    //         _id: user._id,
    //         name: user.name,
    //         email: user.email,
    //         image: "notNow",
    //         isAdmin: user.isAdmin,
    //       };
    //     }
    //     throw new Error("Invalid email or password");
    //   },
    // }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      const customUser = user as CustomUser;
      if (customUser?._id) token._id = customUser._id;
      if (customUser?.isAdmin) token.isAdmin = customUser.isAdmin;
      return token;
    },
    async session({ session, token }: { session: Session; token: any }) {
      const customSession = session as CustomSession;
      if (token._id) customSession.user._id = token._id;
      if (token.isAdmin) customSession.user.isAdmin = token.isAdmin;
      return customSession;
    },
  },
});
