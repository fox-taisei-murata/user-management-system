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
    },
};