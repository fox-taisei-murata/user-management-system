// components/parts/CustomCard.stories.tsx

import type { Meta, StoryObj } from "@storybook/react";
import CustomCard from "./CustomCard";
import CustomButton from "./CustomButton";

// TODO: メタデータ
const meta: Meta<typeof CustomCard> = {
    title: "Components/Parts/CustomCard", 
    component: CustomCard, 
    tags: ["autodocs"],
};

export default meta;

// TODO: ストーリーの定義

export const Default: StoryObj<typeof CustomCard> = {
    args: {
        title: "カードタイトル",
        description: "これはカスタムカードの説明です。",
        bgColor: "#f5f5f5",
        actions: (
            <>
                <CustomButton variantType="secondary">アクション1</CustomButton>
                <CustomButton variantType="danger">アクション2</CustomButton>
            </>
        ),
    },
};

export const WithoutActions: StoryObj<typeof CustomCard> = {
    args: {
        title: "アクションなしのカード",
        description: "アクションが含まれていないカードの説明。",
        bgColor: "#ffffff",
    },
};

export const WithBackgroundColor: StoryObj<typeof CustomCard> = {
    args: {
        title: "背景色付きカード",
        description: "カスタム背景色を設定できます。",
        bgColor: "#ffebcd", 
        actions: (
            <>
                <CustomButton variantType="success">確認</CustomButton>
            </>
        ),
    },
};