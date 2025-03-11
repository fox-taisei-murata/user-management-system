import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import UserList from "./UserList";
import { User } from "../types/User";

// TODO: メタデータ
const meta: Meta<typeof UserList> = {
    title: "Components/UserList",
    component: UserList,
};

export default meta;

// TODO: ストーリーの定義
type Story = StoryObj<typeof UserList>;

const sampleUsers: User[] = [
    {
        id: 1,
        name: "村田 大成",
        email: "murata@example.com",
        role: "管理者",
        deleted: false,
    },
    {
        id: 2,
        name: "山田 太郎",
        email: "yamada@example.com",
        role: "一般",
        deleted: false,
    },
];

export const Default: Story = {
    args: {
        users: sampleUsers,
    },
};

