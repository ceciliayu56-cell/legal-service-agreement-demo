const userProfiles = {
  secretary: {
    id: "u-secretary-li",
    name: "李**秘书",
    role: "secretary",
    globalReview: false,
    canReadContractBody: false,
  },
  compliance_reviewer: {
    id: "u-compliance-reviewer",
    name: "合规审查员",
    role: "compliance_reviewer",
    globalReview: true,
    canReadContractBody: true,
  },
};

const requestedRole = new URLSearchParams(window.location.search).get("role");
const currentUser = userProfiles[requestedRole] || userProfiles.secretary;
localStorage.setItem("mockCurrentUser", JSON.stringify(currentUser));

const userDirectory = {
  "李**秘书": "u-secretary-li",
  陈秘书: "u-secretary-chen",
  王律师: "u-lawyer-wang",
  李律师: "u-lawyer-li",
  周合伙人: "u-partner-zhou",
  孙合伙人: "u-partner-sun",
};

const caseDirectory = [
  {
    name: "星河并购专项",
    caseNumber: "SQT112233",
    client: "星河置业集团",
    participants: [
      { name: "李**秘书", role: "秘书" },
      { name: "王律师", role: "经办律师" },
      { name: "周合伙人", role: "合伙人" },
    ],
  },
  {
    name: "美元基金设立",
    caseNumber: "SQT112235",
    client: "云岚资本",
    participants: [
      { name: "陈秘书", role: "秘书" },
      { name: "李律师", role: "经办律师" },
      { name: "周合伙人", role: "合伙人" },
    ],
  },
  {
    name: "劳动争议专项",
    caseNumber: "SQT112236",
    client: "华辰制造股份",
    participants: [
      { name: "李**秘书", role: "秘书" },
      { name: "王律师", role: "经办律师" },
      { name: "孙合伙人", role: "合伙人" },
    ],
  },
  {
    name: "年度框架服务",
    caseNumber: "SQT112234",
    client: "南山医疗投资",
    participants: [
      { name: "陈秘书", role: "秘书" },
      { name: "李律师", role: "经办律师" },
      { name: "周合伙人", role: "合伙人" },
    ],
  },
  {
    name: "数据合规专项",
    caseNumber: "SQT112237",
    client: "启明数据",
    participants: [
      { name: "李**秘书", role: "秘书" },
      { name: "李律师", role: "经办律师" },
      { name: "周合伙人", role: "合伙人" },
    ],
  },
  {
    name: "许可合作谈判",
    caseNumber: "SQT112238",
    client: "方舟生物",
    participants: [
      { name: "陈秘书", role: "秘书" },
      { name: "王律师", role: "经办律师" },
      { name: "孙合伙人", role: "合伙人" },
    ],
  },
];

const contracts = [
  {
    id: "LSA-20260527-001",
    name: "锐景科技常年法律服务协议",
    client: "锐景科技有限公司",
    caseName: "未关联案件",
    caseNumber: "",
    version: "-",
    status: "待制作A版",
    owner: "李**秘书",
    ownerId: "u-secretary-li",
    risk: "低",
    updatedAt: "2026-05-27 10:42",
    createdBy: "u-secretary-li",
    handlers: ["u-secretary-li"],
    collaborators: [],
    participants: ["u-secretary-li"],
    primaryConfirmer: "周合伙人",
    backupConfirmer: "孙合伙人",
    partnerId: "u-partner-zhou",
    assigneeId: "u-secretary-li",
    templateType: "所内模板",
    relationshipType: "independent",
    relatedContractId: "",
    agreementType: "常年法律顾问协议",
    language: "中文版",
    rules: ["unlinked-over-5-days"],
  },
  {
    id: "LSA-20260527-002",
    name: "凌岳新能源承诺版协议",
    client: "凌岳新能源",
    caseName: "未关联案件",
    caseNumber: "",
    version: "B",
    status: "待签约确认人承诺",
    owner: "周合伙人",
    ownerId: "u-partner-zhou",
    risk: "高",
    updatedAt: "2026-05-27 09:38",
    createdBy: "u-secretary-li",
    handlers: ["u-lawyer-wang"],
    collaborators: ["u-secretary-li"],
    participants: ["u-secretary-li", "u-lawyer-wang"],
    primaryConfirmer: "周合伙人",
    backupConfirmer: "孙合伙人",
    partnerId: "u-partner-zhou",
    assigneeId: "u-partner-zhou",
    templateType: "客户模板",
    relationshipType: "append",
    relatedContractId: "LSA-20260526-006",
    agreementType: "专项法律服务协议",
    language: "中文版",
    rules: ["commitment-pending"],
  },
  {
    id: "LSA-20260527-003",
    name: "星河置业专项法律服务协议",
    client: "星河置业集团",
    caseName: "星河并购专项",
    caseNumber: "SQT112233",
    version: "A",
    status: "待上传B版",
    owner: "李**秘书",
    ownerId: "u-secretary-li",
    risk: "中",
    updatedAt: "2026-05-27 09:18",
    createdBy: "u-secretary-li",
    handlers: ["u-secretary-li"],
    collaborators: [],
    participants: ["u-secretary-li"],
    primaryConfirmer: "周合伙人",
    backupConfirmer: "",
    partnerId: "u-partner-zhou",
    assigneeId: "u-secretary-li",
    templateType: "所内模板",
    relationshipType: "independent",
    relatedContractId: "",
    agreementType: "专项法律服务协议",
    language: "中英双语版",
    rules: ["pending-upload-b"],
  },
  {
    id: "LSA-20260526-004",
    name: "云岚资本英文版服务协议",
    client: "云岚资本",
    caseName: "美元基金设立",
    caseNumber: "SQT112235",
    version: "B",
    status: "B版风险确认中",
    owner: "合规委员会",
    ownerId: "committee-compliance",
    risk: "高",
    updatedAt: "2026-05-26 15:34",
    createdBy: "u-secretary-li",
    handlers: ["u-lawyer-li"],
    collaborators: ["u-secretary-li"],
    participants: ["u-secretary-li", "u-lawyer-li"],
    primaryConfirmer: "周合伙人",
    backupConfirmer: "王合伙人",
    partnerId: "u-partner-zhou",
    assigneeId: "committee-compliance",
    templateType: "客户模板",
    relationshipType: "replace",
    relatedContractId: "LSA-20260520-009",
    replaceReason: "客户更新了英文版付款和责任条款，需以新版本替换原协议。",
    agreementType: "专项法律服务协议",
    language: "纯英文版",
    rules: ["customer-version-pending"],
  },
  {
    id: "LSA-20260526-005",
    name: "华辰制造法律服务协议",
    client: "华辰制造股份",
    caseName: "劳动争议专项",
    caseNumber: "SQT112236",
    version: "B",
    status: "待上传C版",
    owner: "王律师",
    ownerId: "u-lawyer-wang",
    risk: "低",
    updatedAt: "2026-05-26 11:20",
    createdBy: "u-secretary-li",
    handlers: ["u-lawyer-wang"],
    collaborators: ["u-secretary-li"],
    participants: ["u-secretary-li", "u-lawyer-wang"],
    primaryConfirmer: "孙合伙人",
    backupConfirmer: "",
    partnerId: "u-partner-sun",
    assigneeId: "u-secretary-li",
    templateType: "补充协议",
    relationshipType: "supplement",
    relatedContractId: "LSA-20260527-003",
    supplementMatter: "服务范围变更",
    agreementType: "专项法律服务协议",
    language: "中文版",
    rules: ["pending-upload-c"],
  },
  {
    id: "LSA-20260526-006",
    name: "南山医疗框架协议",
    client: "南山医疗投资",
    caseName: "年度框架服务",
    caseNumber: "SQT112234",
    version: "B",
    status: "可用印",
    owner: "行政用印人员",
    ownerId: "seal-admin",
    risk: "低",
    updatedAt: "2026-05-26 18:06",
    createdBy: "u-secretary-chen",
    handlers: ["u-lawyer-li"],
    collaborators: ["u-secretary-li"],
    participants: ["u-secretary-li", "u-lawyer-li"],
    primaryConfirmer: "周合伙人",
    backupConfirmer: "",
    partnerId: "u-partner-zhou",
    assigneeId: "seal-admin",
    templateType: "所内模板",
    relationshipType: "independent",
    relatedContractId: "",
    agreementType: "常年法律顾问协议",
    language: "中文版",
    rules: ["seal-ready"],
  },
  {
    id: "LSA-20260525-007",
    name: "启明数据付款协议",
    client: "启明数据",
    caseName: "数据合规专项",
    caseNumber: "SQT112237",
    version: "C",
    status: "待事后审核",
    owner: "合规委员会",
    ownerId: "committee-compliance",
    risk: "低",
    updatedAt: "2026-05-25 14:10",
    createdBy: "u-secretary-li",
    handlers: ["u-lawyer-li"],
    collaborators: [],
    participants: ["u-secretary-li", "u-lawyer-li"],
    primaryConfirmer: "周合伙人",
    backupConfirmer: "",
    partnerId: "u-partner-zhou",
    assigneeId: "committee-compliance",
    templateType: "付款协议",
    relationshipType: "append",
    relatedContractId: "LSA-20260527-003",
    agreementType: "专项法律服务协议",
    language: "中文版",
    rules: [],
  },
  {
    id: "LSA-20260524-008",
    name: "方舟生物标准法律服务协议",
    client: "方舟生物",
    caseName: "许可合作谈判",
    caseNumber: "SQT112238",
    version: "C",
    status: "已归档",
    owner: "档案室",
    ownerId: "archive-admin",
    risk: "低",
    updatedAt: "2026-05-24 16:22",
    createdBy: "u-secretary-li",
    handlers: ["u-lawyer-wang"],
    collaborators: [],
    participants: ["u-secretary-li", "u-lawyer-wang"],
    primaryConfirmer: "孙合伙人",
    backupConfirmer: "",
    partnerId: "u-partner-sun",
    assigneeId: "archive-admin",
    templateType: "所内模板",
    relationshipType: "independent",
    relatedContractId: "",
    agreementType: "专项法律服务协议",
    language: "英文版",
    rules: [],
  },
  {
    id: "LSA-20260520-009",
    name: "远航贸易框架协议",
    client: "远航贸易",
    caseName: "未关联案件",
    caseNumber: "",
    version: "-",
    status: "已被替换",
    owner: "李**秘书",
    ownerId: "u-secretary-li",
    risk: "低",
    updatedAt: "2026-05-20 13:20",
    createdBy: "u-secretary-li",
    handlers: ["u-secretary-li"],
    collaborators: [],
    participants: ["u-secretary-li"],
    primaryConfirmer: "周合伙人",
    backupConfirmer: "",
    partnerId: "u-partner-zhou",
    assigneeId: "u-secretary-li",
    templateType: "客户模板",
    relationshipType: "independent",
    relatedContractId: "",
    agreementType: "专项法律服务协议",
    language: "中文版",
    rules: [],
  },
];

const statusClassMap = {
  草稿中: "status-draft",
  待制作A版: "status-draft",
  待上传B版: "status-upload",
  B版风险确认中: "status-risk",
  待签约确认人承诺: "status-commitment",
  可用印: "status-seal-ready",
  待发起用印: "status-seal-ready",
  用印中: "status-seal",
  待上传C版: "status-upload-c",
  待事后审核: "status-review",
  已归档: "status-archived",
  "已撤回/已作废": "status-cancelled",
  已被替换: "status-replaced",
};

const actionMap = {
  草稿中: "继续编辑",
  待制作A版: "制作A版",
  待上传B版: "上传B版",
  B版风险确认中: "填写风险说明",
  待签约确认人承诺: "催签承诺",
  可用印: "申请用印",
  待发起用印: "发起用印",
  用印中: "查看用印",
  待上传C版: "上传C版",
  待事后审核: "查看审核",
  已归档: "查看详情",
  "已撤回/已作废": "查看详情",
  已被替换: "查看详情",
};

const relationshipLabelMap = {
  replace: "替换原协议",
  append: "追加新协议",
  supplement: "补充原协议",
};

const relationshipTipMap = {
  replace: "替换后，原协议将标记为已被替换，但历史版本和归档记录仍会保留。",
  append: "追加协议不会影响原协议效力，原协议仍保持当前状态。",
  supplement: "补充协议不会覆盖原协议，原协议仍保持当前状态。",
};

const relationshipTagTitleMap = {
  replace: "替换原协议：点击合同名称进入详情，可查看关联的原协议。",
  append: "追加新协议：点击合同名称进入详情，可查看关联的原协议。",
  supplement: "补充原协议：点击合同名称进入详情，可查看被补充的原协议。",
};

const taskFilters = [
  {
    id: "todo",
    countId: "taskTodoCount",
    predicate: (contract) => canOperateContract(contract, currentUser),
  },
  {
    id: "pending-upload-b",
    countId: "taskUploadBCount",
    predicate: (contract) => contract.status === "待上传B版",
  },
  {
    id: "commitment-pending",
    countId: "taskCommitmentCount",
    predicate: (contract) => contract.status === "待签约确认人承诺",
  },
  {
    id: "seal-ready",
    countId: "taskSealReadyCount",
    predicate: (contract) => contract.status === "可用印",
  },
  {
    id: "pending-upload-c",
    countId: "taskUploadCCount",
    predicate: (contract) => contract.status === "待上传C版",
  },
  {
    id: "unlinked-over-5-days",
    countId: "taskUnlinkedCount",
    predicate: (contract) => !contract.caseNumber,
  },
];

const contractRows = document.querySelector("#contractRows");
const emptyState = document.querySelector("#emptyState");
const searchInput = document.querySelector("#searchInput");
const statusFilter = document.querySelector("#statusFilter");
const riskFilter = document.querySelector("#riskFilter");
const modalBackdrop = document.querySelector("#modalBackdrop");
const newContractButton = document.querySelector("#newContractButton");
const closeModalButton = document.querySelector("#closeModalButton");
const contractForm = document.querySelector("#contractForm");
const saveDraftButton = document.querySelector("#saveDraftButton");
const primaryCreateButton = document.querySelector("#primaryCreateButton");
const relationshipType = document.querySelector("#relationshipType");
const relationshipFields = document.querySelector("#relationshipFields");
const relatedContractSearch = document.querySelector("#relatedContractSearch");
const relatedContractOptions = document.querySelector("#relatedContractOptions");
const relatedContractCard = document.querySelector("#relatedContractCard");
const replaceReasonField = document.querySelector("#replaceReasonField");
const supplementMatterField = document.querySelector("#supplementMatterField");
const relationshipTip = document.querySelector("#relationshipTip");
const caseNameInput = document.querySelector("#caseNameInput");
const caseOptions = document.querySelector("#caseOptions");
const participantPicker = document.querySelector("#participantPicker");
const participantGrid = document.querySelector("#participantGrid");
const viewSwitch = document.querySelector("#viewSwitch");
const listTitle = document.querySelector("#listTitle");
const complianceReviewLink = document.querySelector("#complianceReviewLink");

let activeTaskFilter = "";
let activePoolFilter = "";
let activeChipFilter = "";
let activeView = "todo";

function hasGlobalReviewPermission(user) {
  return ["compliance", "management", "authorized-reviewer", "compliance_reviewer"].includes(user.role) || user.globalReview;
}

function canViewContract(contract, user) {
  if (hasGlobalReviewPermission(user)) return true;
  if (user.role === "admin") return false;
  if (user.role === "secretary") {
    return (
      contract.createdBy === user.id ||
      contract.handlers.includes(user.id) ||
      contract.collaborators.includes(user.id) ||
      contract.assigneeId === user.id
    );
  }
  if (user.role === "lawyer") return contract.participants.includes(user.id);
  if (user.role === "partner") return contract.partnerId === user.id;
  return false;
}

function canOperateContract(contract, user) {
  if (contract.assigneeId === user.id) return true;
  if (contract.collaborators.includes(user.id) && ["待上传B版", "待上传C版"].includes(contract.status)) return true;
  if (hasGlobalReviewPermission(user) && ["B版风险确认中", "待事后审核"].includes(contract.status)) return true;
  return false;
}

function getVisibleContracts() {
  const scoped = contracts.filter((contract) => canViewContract(contract, currentUser));

  if (hasGlobalReviewPermission(currentUser)) {
    if (activeView === "todo") return scoped.filter((contract) => canOperateContract(contract, currentUser));
    if (activeView === "risk") return scoped.filter((contract) => contract.risk === "高" || contract.status === "B版风险确认中");
    return scoped;
  }

  return scoped;
}

function createTag(label, className) {
  return `<span class="tag ${className}">${label}</span>`;
}

function createRelationshipTag(type) {
  const label = relationshipLabelMap[type];
  const title = relationshipTagTitleMap[type] || "";
  return label ? `<span class="relationship-tag" title="${title}">${label}</span>` : "";
}

function createRelationshipMeta(contract) {
  if (!contract.relatedContractId) return "";
  const original = contracts.find((item) => item.id === contract.relatedContractId);
  if (!original) return "";
  return `<div class="relationship-meta">原协议：${original.name}（${original.id}）</div>`;
}

function getAction(status) {
  return actionMap[status] || "查看详情";
}

function createContractId() {
  return `LSA-${Date.now()}`;
}

function formatNow() {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")} ${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
}

function formatShortDate(value) {
  const match = value.match(/^\d{4}-(\d{2})-(\d{2})/);
  return match ? `${match[1]}-${match[2]}` : value;
}

function parseCollaborators(value) {
  return value
    .split(/[，,]/)
    .map((name) => name.trim())
    .filter(Boolean)
    .map((name) => userDirectory[name])
    .filter((id) => id && id !== currentUser.id);
}

function getCollaboratorNames() {
  return contractForm.elements.collaboratorNames.value
    .split(/[，,]/)
    .map((name) => name.trim())
    .filter(Boolean);
}

function setCollaboratorNames(names) {
  contractForm.elements.collaboratorNames.value = Array.from(new Set(names)).join("，");
}

function toggleCollaboratorName(name) {
  const names = getCollaboratorNames();
  const exists = names.includes(name);
  setCollaboratorNames(exists ? names.filter((item) => item !== name) : [...names, name]);
  renderParticipantCards(getSelectedCase());
}

function goToADrafting(contractId) {
  const route = `/contracts/${contractId}/a-drafting`;
  const existingContract = contracts.find((contract) => contract.id === contractId);
  if (existingContract) storeContractDraft(existingContract);
  localStorage.setItem("currentADraftingRoute", route);
  window.location.href = `./a-drafting.html?contractId=${encodeURIComponent(contractId)}&route=${encodeURIComponent(route)}`;
}

function goToBUpload(contractId) {
  const route = `/contracts/${contractId}/b-upload`;
  const existingContract = contracts.find((contract) => contract.id === contractId);
  if (existingContract) storeContractDraft(existingContract);
  localStorage.setItem("currentBUploadRoute", route);
  window.location.href = `./b-upload.html?contractId=${encodeURIComponent(contractId)}&route=${encodeURIComponent(route)}`;
}

function goToCommitment(contractId) {
  window.location.href = `./commitment.html?contractId=${encodeURIComponent(contractId)}`;
}

function goToUploadC(contractId) {
  window.location.href = `./upload-c.html?contractId=${encodeURIComponent(contractId)}`;
}

function goToSealApplication(contractId) {
  window.location.href = `./seal-application.html?contractId=${encodeURIComponent(contractId)}`;
}

function goToDetail(contractId) {
  window.location.href = `./detail.html?id=${encodeURIComponent(contractId)}`;
}

function goToNextStep(contract) {
  if (["草稿中", "待制作A版"].includes(contract.status)) {
    goToADrafting(contract.id);
    return;
  }
  if (["待上传B版", "B版风险确认中"].includes(contract.status)) {
    goToBUpload(contract.id);
    return;
  }
  if (contract.status === "待签约确认人承诺") {
    goToCommitment(contract.id);
    return;
  }
  if (["可用印", "待发起用印"].includes(contract.status)) {
    goToSealApplication(contract.id);
    return;
  }
  if (contract.status === "待上传C版") {
    goToUploadC(contract.id);
    return;
  }
  goToDetail(contract.id);
}

function storeContractDraft(contract) {
  localStorage.setItem(
    "currentContractDraft",
    JSON.stringify({
      id: contract.id,
      name: contract.name,
      client: contract.client,
      caseName: contract.caseName,
      template: `${contract.agreementType} / ${contract.language}`,
      partner: contract.primaryConfirmer,
      producer: currentUser.name,
    }),
  );
}

function getRelatedContractFromInput() {
  const value = relatedContractSearch.value.trim();
  return contracts.find((contract) => contract.id === value || contract.name === value);
}

function populateRelatedOptions() {
  relatedContractOptions.innerHTML = contracts
    .map(
      (contract) =>
        `<option value="${contract.id}" label="${contract.name} / ${contract.client} / ${contract.caseNumber || "未关联案号"}"></option>`,
    )
    .join("");
}

function populateCaseOptions() {
  caseOptions.innerHTML = caseDirectory
    .map((item) => `<option value="${item.name}" label="${item.client} / ${item.caseNumber}"></option>`)
    .join("");
}

function getSelectedCase() {
  const value = caseNameInput.value.trim();
  return caseDirectory.find((item) => item.name === value || item.caseNumber === value);
}

function syncClientFromCase() {
  const selectedCase = getSelectedCase();
  if (!selectedCase) {
    renderParticipantCards(null);
    return;
  }
  contractForm.elements.client.value = selectedCase.client;
  renderParticipantCards(selectedCase);
}

function renderParticipantCards(selectedCase) {
  if (!selectedCase || !selectedCase.participants?.length) {
    participantPicker.hidden = true;
    participantGrid.innerHTML = "";
    return;
  }

  const selectedNames = getCollaboratorNames();
  participantPicker.hidden = false;
  participantGrid.innerHTML = selectedCase.participants
    .map((participant) => {
      const active = selectedNames.includes(participant.name) ? "active" : "";
      return `
        <button class="participant-card ${active}" type="button" data-participant-name="${participant.name}">
          <strong>${participant.name}</strong>
          <span>${participant.role}</span>
        </button>
      `;
    })
    .join("");

  participantGrid.querySelectorAll("[data-participant-name]").forEach((button) => {
    button.addEventListener("click", () => toggleCollaboratorName(button.dataset.participantName));
  });
}

function renderRelatedContractCard(contract) {
  if (!contract) {
    relatedContractCard.hidden = true;
    return;
  }

  document.querySelector("#relatedName").textContent = contract.name;
  document.querySelector("#relatedId").textContent = contract.id;
  document.querySelector("#relatedClient").textContent = contract.client;
  document.querySelector("#relatedStatus").textContent = contract.status;
  document.querySelector("#relatedCase").textContent = contract.caseNumber
    ? `${contract.caseName}（${contract.caseNumber}）`
    : contract.caseName;
  relatedContractCard.hidden = false;
}

function updateRelationshipFields() {
  const type = relationshipType.value;
  const needsOriginal = type !== "independent";
  relationshipFields.hidden = !needsOriginal;

  relatedContractSearch.required = needsOriginal;
  replaceReasonField.hidden = type !== "replace";
  supplementMatterField.hidden = type !== "supplement";
  contractForm.elements.replaceReason.required = type === "replace";
  contractForm.elements.supplementMatter.required = type === "supplement";
  relationshipTip.textContent = relationshipTipMap[type] || "";

  if (!needsOriginal) {
    relatedContractSearch.value = "";
    renderRelatedContractCard(null);
  } else {
    renderRelatedContractCard(getRelatedContractFromInput());
  }
}

function renderStats(baseContracts) {
  taskFilters.forEach((filter) => {
    document.querySelector(`#${filter.countId}`).textContent = baseContracts.filter((contract) =>
      filter.predicate(contract)
    ).length;
  });
}

function matchesChip(contract) {
  if (!activeChipFilter) return true;
  if (activeChipFilter === "created-by-me") return contract.createdBy === currentUser.id;
  if (activeChipFilter === "assisted-by-me") return contract.collaborators.includes(currentUser.id);
  if (activeChipFilter === "todo") return canOperateContract(contract, currentUser);
  if (activeChipFilter === "blocked-by-others") return canViewContract(contract, currentUser) && !canOperateContract(contract, currentUser);
  if (activeChipFilter === "customer-template") return contract.templateType === "客户模板";
  if (activeChipFilter === "unlinked-case") return !contract.caseNumber;
  if (activeChipFilter === "upload-c") return contract.status === "待上传C版";
  return true;
}

function getFilteredContracts(baseContracts) {
  const keyword = searchInput.value.trim().toLowerCase();
  const selectedStatus = statusFilter.value;
  const selectedRisk = riskFilter.value;

  return baseContracts
    .filter((contract) => {
      const searchable = [
        contract.name,
        contract.id,
        contract.client,
        contract.caseName,
        contract.caseNumber || "未关联案件",
        contract.owner,
        contract.primaryConfirmer,
        contract.backupConfirmer,
      ]
        .join(" ")
        .toLowerCase();

      const activeTask = taskFilters.find((item) => item.id === activeTaskFilter);
      const matchesKeyword = !keyword || searchable.includes(keyword);
      const matchesStatus = selectedStatus === "全部状态" || contract.status === selectedStatus;
      const matchesRisk = selectedRisk === "全部" || contract.risk === selectedRisk;
      const matchesTask = !activeTaskFilter || (activeTask && activeTask.predicate(contract));
      const matchesPool = activePoolFilter !== "todo" || canOperateContract(contract, currentUser);

      return matchesKeyword && matchesStatus && matchesRisk && matchesTask && matchesPool && matchesChip(contract);
    })
    .sort((a, b) => {
      if (canOperateContract(a, currentUser) && !canOperateContract(b, currentUser)) return -1;
      if (!canOperateContract(a, currentUser) && canOperateContract(b, currentUser)) return 1;
      if (a.risk === "高" && b.risk !== "高") return -1;
      if (a.risk !== "高" && b.risk === "高") return 1;
      return b.updatedAt.localeCompare(a.updatedAt);
    });
}

function renderContracts() {
  const baseContracts = getVisibleContracts();
  renderStats(baseContracts);

  const filtered = getFilteredContracts(baseContracts);

  contractRows.innerHTML = filtered
    .map((contract) => {
      const canOperate = canOperateContract(contract, currentUser);
      const action = getAction(contract.status);
      const actionClass = contract.status === "B版风险确认中" ? "row-action risk" : "row-action";
      const actionAttr = `data-next-step="${contract.id}"`;
      const moreMenu = `<select class="more-select" aria-label="更多操作"><option>更多</option><option>查看详情</option><option>添加协办人</option><option>转交处理</option><option>作废合同</option></select>`;
      const actionCell = `<button class="${canOperate ? actionClass : "row-action readonly"}" type="button" ${actionAttr}>${action}</button>`;

      return `
        <tr class="${contract.risk === "高" ? "high-risk" : ""}">
          <td>
            <a class="contract-link" href="./detail.html?id=${encodeURIComponent(contract.id)}">${contract.name}</a>
            ${createRelationshipTag(contract.relationshipType)}
            ${createRelationshipMeta(contract)}
          </td>
          <td>${createTag(contract.status, statusClassMap[contract.status])}</td>
          <td>${contract.owner}</td>
          <td>${actionCell}</td>
          <td>${contract.client}</td>
          <td class="${contract.caseName === "未关联案件" ? "muted" : ""}">${contract.caseName}</td>
          <td class="${contract.caseNumber ? "" : "muted"}">${contract.caseNumber || "未关联"}</td>
          <td>${contract.primaryConfirmer}${contract.backupConfirmer ? ` / ${contract.backupConfirmer}` : ""}</td>
          <td><span class="version-pill">${contract.version}</span></td>
          <td>${moreMenu}</td>
          <td class="date-cell">${formatShortDate(contract.updatedAt)}</td>
        </tr>
      `;
    })
    .join("");

  emptyState.hidden = filtered.length > 0;

  contractRows.querySelectorAll("[data-next-step]").forEach((button) => {
    button.addEventListener("click", () => {
      const contract = contracts.find((item) => item.id === button.dataset.nextStep);
      if (contract) goToNextStep(contract);
    });
  });
}

function resetFilters() {
  searchInput.value = "";
  statusFilter.value = "全部状态";
  riskFilter.value = "全部";
  activeTaskFilter = "";
  activePoolFilter = "";
  activeChipFilter = "";
  document.querySelectorAll(".chip-row button").forEach((button) => button.classList.remove("active"));
  document.querySelectorAll(".task-card").forEach((button) => button.classList.remove("active"));
}

function applyPoolFilter(type, value) {
  resetFilters();
  if (type === "todo") activePoolFilter = "todo";
  if (type === "status") statusFilter.value = value;
  renderContracts();
}

function applyTaskFilter(task) {
  resetFilters();
  activeTaskFilter = task;
  document.querySelector(`[data-task-filter="${task}"]`)?.classList.add("active");
  renderContracts();
}

function setupViewSwitch() {
  if (complianceReviewLink) {
    complianceReviewLink.hidden = false;
    complianceReviewLink.href = "./compliance-review.html";
  }

  if (!hasGlobalReviewPermission(currentUser)) {
    viewSwitch.hidden = true;
    listTitle.textContent = "我的合同工作台";
    return;
  }

  viewSwitch.hidden = false;
  listTitle.textContent = "合同审查工作台";
  viewSwitch.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      activeView = button.dataset.view;
      viewSwitch.querySelectorAll("button").forEach((item) => item.classList.toggle("active", item === button));
      resetFilters();
      renderContracts();
    });
  });
}

function updatePrimaryCreateButton() {
  const mode = contractForm.elements.creationMode.value;
  primaryCreateButton.textContent = mode === "customer" ? "直接上传待用印版/B版" : "开始制作A版";
}

function openModal() {
  modalBackdrop.hidden = false;
  populateRelatedOptions();
  populateCaseOptions();
  contractForm.elements.producer.value = currentUser.name;
  updatePrimaryCreateButton();
  updateRelationshipFields();
  renderParticipantCards(getSelectedCase());
  contractForm.elements.contractName.focus();
}

function closeModal() {
  modalBackdrop.hidden = true;
}

function buildContractFromForm(status) {
  const formData = new FormData(contractForm);
  const contractId = createContractId();
  const selectedCase = getSelectedCase();
  const caseName = selectedCase?.name || formData.get("caseName") || "未关联案件";
  const relation = formData.get("relationshipType");
  const relatedContract = relation === "independent" ? null : getRelatedContractFromInput();
  const collaborators = parseCollaborators(formData.get("collaboratorNames") || "");

  return {
    id: contractId,
    name: formData.get("contractName"),
    client: formData.get("client"),
    caseName,
    caseNumber: selectedCase?.caseNumber || "",
    version: "-",
    status,
    owner: currentUser.name,
    ownerId: currentUser.id,
    risk: "低",
    updatedAt: formatNow(),
    createdBy: currentUser.id,
    handlers: [currentUser.id],
    collaborators,
    participants: Array.from(new Set([currentUser.id, ...collaborators])),
    primaryConfirmer: formData.get("primaryConfirmer"),
    backupConfirmer: formData.get("backupConfirmer"),
    partnerId: "u-partner-zhou",
    assigneeId: currentUser.id,
    templateType: formData.get("creationMode") === "customer" ? "客户模板" : "所内模板",
    relationshipType: relation,
    relatedContractId: relatedContract?.id || "",
    replaceReason: formData.get("replaceReason") || "",
    supplementMatter: formData.get("supplementMatter") || "",
    agreementType: formData.get("agreementType"),
    language: formData.get("language"),
    rules: caseName === "未关联案件" ? ["unlinked-over-5-days"] : [],
  };
}

function validateRelationshipSelection() {
  if (relationshipType.value === "independent") return true;
  return Boolean(getRelatedContractFromInput());
}

[searchInput, statusFilter, riskFilter].forEach((control) => {
  control.addEventListener("input", () => {
    activeTaskFilter = "";
    activePoolFilter = "";
    activeChipFilter = "";
    document.querySelectorAll(".task-card").forEach((button) => button.classList.remove("active"));
    renderContracts();
  });
  control.addEventListener("change", () => {
    activeTaskFilter = "";
    activePoolFilter = "";
    activeChipFilter = "";
    document.querySelectorAll(".task-card").forEach((button) => button.classList.remove("active"));
    renderContracts();
  });
});

document.querySelectorAll("[data-pool-filter]").forEach((button) => {
  button.addEventListener("click", () => applyPoolFilter(button.dataset.poolFilter, button.dataset.filterValue));
});

document.querySelectorAll("[data-task-filter]").forEach((button) => {
  button.addEventListener("click", () => applyTaskFilter(button.dataset.taskFilter));
});

document.querySelectorAll("[data-chip-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    resetFilters();
    activeChipFilter = button.dataset.chipFilter;
    button.classList.add("active");
    renderContracts();
  });
});

Array.from(contractForm.elements.creationMode).forEach((radio) => {
  radio.addEventListener("change", updatePrimaryCreateButton);
});

caseNameInput.addEventListener("input", syncClientFromCase);
caseNameInput.addEventListener("change", syncClientFromCase);
contractForm.elements.collaboratorNames.addEventListener("input", () => renderParticipantCards(getSelectedCase()));
contractForm.elements.collaboratorNames.addEventListener("change", () => renderParticipantCards(getSelectedCase()));

relationshipType.addEventListener("change", updateRelationshipFields);
relatedContractSearch.addEventListener("input", () => {
  renderRelatedContractCard(getRelatedContractFromInput());
});

newContractButton.addEventListener("click", openModal);
closeModalButton.addEventListener("click", closeModal);

modalBackdrop.addEventListener("click", (event) => {
  if (event.target === modalBackdrop) closeModal();
});

saveDraftButton.addEventListener("click", () => {
  if (!contractForm.reportValidity()) return;
  if (!validateRelationshipSelection()) {
    relatedContractSearch.focus();
    return;
  }
  contracts.unshift(buildContractFromForm("草稿中"));
  contractForm.reset();
  closeModal();
  renderContracts();
});

contractForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!contractForm.reportValidity()) return;
  if (!validateRelationshipSelection()) {
    relatedContractSearch.focus();
    return;
  }
  const mode = contractForm.elements.creationMode.value;
  const contract = buildContractFromForm(mode === "customer" ? "待上传B版" : "待制作A版");
  contracts.unshift(contract);
  storeContractDraft(contract);
  if (mode === "customer") {
    goToBUpload(contract.id);
  } else {
    goToADrafting(contract.id);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !modalBackdrop.hidden) closeModal();
});

setupViewSwitch();
renderContracts();
