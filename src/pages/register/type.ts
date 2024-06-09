export interface RegisterUser {
    password: string; // 密码
    nickname?: string; // 昵称（可选字段）
    email?: string; // 邮箱（可选字段）
    phonenumber?: string; // 手机号（可选字段）
    sex?: '0' | '1' | '2'; // 性别（可选字段），'0' 表示男，'1' 表示女，'2' 表示未知
    avatar?: string; // 头像（可选字段）
    userType?: '0' | '1'; // 用户类型（可选字段），'0' 表示管理员，'1' 表示普通用户
    status?: '0' | '1'; // 账号状态（可选字段），'0' 表示正常，'1' 表示停用
    createBy?: number; // 创建人的用户ID（可选字段）
    createTime?: Date; // 创建时间（可选字段）
    updateBy?: number; // 更新人（可选字段）
    updateTime?: Date; // 更新时间（可选字段）
    delFlag?: number; // 删除标志（可选字段），'0' 表示未删除，'1' 表示已删除
    userName?: string; // 用户名（可选字段）
}
