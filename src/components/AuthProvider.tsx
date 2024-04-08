import { PropsWithChildren, createContext, useContext, useState } from "react";
import { User } from "../types/User";


const AuthContext = createContext<User | null>(null);

type AuthProviderProps = PropsWithChildren & {
    isSignedIn?: boolean;
};

export default function AuthProvider({
    children,
    isSignedIn,
}: AuthProviderProps) {
    const [user] = useState<User | null>(isSignedIn ? {id : 1} : null);

    return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
    const context = useContext(AuthContext);

    if (context === undefined) {
        console.log("error undifines");
        
        throw new Error('useAuth must be used within an AuthProvider');
    }
    console.log("esto que es" +context);
    
    return context;
}