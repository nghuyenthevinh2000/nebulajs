import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateProjectRequest, MsgDeleteProjectRequest, MsgWithdrawAllTokensRequest } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/nebula.launchpad.MsgCreateProjectRequest", MsgCreateProjectRequest], ["/nebula.launchpad.MsgDeleteProjectRequest", MsgDeleteProjectRequest], ["/nebula.launchpad.MsgWithdrawAllTokensRequest", MsgWithdrawAllTokensRequest]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createProject(value: MsgCreateProjectRequest) {
      return {
        typeUrl: "/nebula.launchpad.MsgCreateProjectRequest",
        value: MsgCreateProjectRequest.encode(value).finish()
      };
    },

    deleteProject(value: MsgDeleteProjectRequest) {
      return {
        typeUrl: "/nebula.launchpad.MsgDeleteProjectRequest",
        value: MsgDeleteProjectRequest.encode(value).finish()
      };
    },

    withdrawAllTokens(value: MsgWithdrawAllTokensRequest) {
      return {
        typeUrl: "/nebula.launchpad.MsgWithdrawAllTokensRequest",
        value: MsgWithdrawAllTokensRequest.encode(value).finish()
      };
    }

  },
  withTypeUrl: {
    createProject(value: MsgCreateProjectRequest) {
      return {
        typeUrl: "/nebula.launchpad.MsgCreateProjectRequest",
        value
      };
    },

    deleteProject(value: MsgDeleteProjectRequest) {
      return {
        typeUrl: "/nebula.launchpad.MsgDeleteProjectRequest",
        value
      };
    },

    withdrawAllTokens(value: MsgWithdrawAllTokensRequest) {
      return {
        typeUrl: "/nebula.launchpad.MsgWithdrawAllTokensRequest",
        value
      };
    }

  },
  toJSON: {
    createProject(value: MsgCreateProjectRequest) {
      return {
        typeUrl: "/nebula.launchpad.MsgCreateProjectRequest",
        value: MsgCreateProjectRequest.toJSON(value)
      };
    },

    deleteProject(value: MsgDeleteProjectRequest) {
      return {
        typeUrl: "/nebula.launchpad.MsgDeleteProjectRequest",
        value: MsgDeleteProjectRequest.toJSON(value)
      };
    },

    withdrawAllTokens(value: MsgWithdrawAllTokensRequest) {
      return {
        typeUrl: "/nebula.launchpad.MsgWithdrawAllTokensRequest",
        value: MsgWithdrawAllTokensRequest.toJSON(value)
      };
    }

  },
  fromJSON: {
    createProject(value: any) {
      return {
        typeUrl: "/nebula.launchpad.MsgCreateProjectRequest",
        value: MsgCreateProjectRequest.fromJSON(value)
      };
    },

    deleteProject(value: any) {
      return {
        typeUrl: "/nebula.launchpad.MsgDeleteProjectRequest",
        value: MsgDeleteProjectRequest.fromJSON(value)
      };
    },

    withdrawAllTokens(value: any) {
      return {
        typeUrl: "/nebula.launchpad.MsgWithdrawAllTokensRequest",
        value: MsgWithdrawAllTokensRequest.fromJSON(value)
      };
    }

  },
  fromPartial: {
    createProject(value: MsgCreateProjectRequest) {
      return {
        typeUrl: "/nebula.launchpad.MsgCreateProjectRequest",
        value: MsgCreateProjectRequest.fromPartial(value)
      };
    },

    deleteProject(value: MsgDeleteProjectRequest) {
      return {
        typeUrl: "/nebula.launchpad.MsgDeleteProjectRequest",
        value: MsgDeleteProjectRequest.fromPartial(value)
      };
    },

    withdrawAllTokens(value: MsgWithdrawAllTokensRequest) {
      return {
        typeUrl: "/nebula.launchpad.MsgWithdrawAllTokensRequest",
        value: MsgWithdrawAllTokensRequest.fromPartial(value)
      };
    }

  }
};