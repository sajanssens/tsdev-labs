interface Switch {
    enabled: boolean;
}

const sw = {enabeled: true} satisfies Switch

const switches: { [device: string]: Switch } = {
    lamp: { enabled: false },
    phoneCharger: { enabled: false },
    tv: { enabeld: false },
// 💥 'enabeld' does not exist in type 'Switch'
};

if (switches["lamp"]?.enabled) {
// ✅ 'lamp' is fine now
}