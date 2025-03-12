
"use client"
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import UserDetails from '@/components/UserDetails';
import { User } from '@/types/User';
import { fetchUserById } from "@/utils/api";

const UserDetailsPage: React.FC = () => {
    const  id  = useParams().id; // URL パラメータからユーザー ID を取得
    const [user, setUser] = useState<User | null>(null); // ユーザー情報を状態として管理


    useEffect(() => {
        if (id) {
            const fetchUser = async () => {
                try {
                    const userData = await fetchUserById(Number(id)); // IDを元にユーザー情報を取得
                    setUser(userData); // 取得したユーザー情報を状態に設定
                } catch (error) {
                    console.error('ユーザー情報の取得に失敗しました', error);
                }
            };
            fetchUser();
        }
    }, [id]);
    
   
    return (
        <div>
            {user && <UserDetails user = {user} />}
        </div>
    );
};

export default UserDetailsPage;
