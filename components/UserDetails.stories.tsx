import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import UserDetails from "./UserDetails";


// TODO: メタデータ
const meta: Meta<typeof UserDetails> = {
    title: "Components/UserDetails",
    component: UserDetails,
};

export default meta;

// TODO: ストーリーの定義
type Story = StoryObj<typeof UserDetails>;

export const Default: Story = {
    args: {
        user: {
            id: 1,
            name: '山田 太郎',
            email: 'taro.yamada@example.com',
            role: '管理者',
            deleted: false,
        },
    }
};