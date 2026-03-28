type __VLS_Props = {
    /** * รูปแบบการจัดเรียงของ Badge
     * @default "horizontal"
     */
    orientation?: "horizontal" | "vertical";
    /** * รายการชื่อทักษะหรือความสามารถ (Skill set)
     * @example ['Vue.js', 'Bun', 'TypeScript']
     */
    items?: string[];
};
declare const __VLS_export: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
