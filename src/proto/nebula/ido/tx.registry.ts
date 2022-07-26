import { Coin } from "../../cosmos/base/v1beta1/coin";
import { AllocationLimit } from "./ido";
import { Timestamp } from "../../google/protobuf/timestamp";
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgEnableIDORequest, MsgCommitParticipationRequest } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/nebula.ido.MsgEnableIDORequest", MsgEnableIDORequest], ["/nebula.ido.MsgCommitParticipationRequest", MsgCommitParticipationRequest]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    enableIDO(value: MsgEnableIDORequest) {
      return {
        typeUrl: "/nebula.ido.MsgEnableIDORequest",
        value: MsgEnableIDORequest.encode(value).finish()
      };
    },

    commitParticipation(value: MsgCommitParticipationRequest) {
      return {
        typeUrl: "/nebula.ido.MsgCommitParticipationRequest",
        value: MsgCommitParticipationRequest.encode(value).finish()
      };
    }

  },
  withTypeUrl: {
    enableIDO(value: MsgEnableIDORequest) {
      return {
        typeUrl: "/nebula.ido.MsgEnableIDORequest",
        value
      };
    },

    commitParticipation(value: MsgCommitParticipationRequest) {
      return {
        typeUrl: "/nebula.ido.MsgCommitParticipationRequest",
        value
      };
    }

  },
  toJSON: {
    enableIDO(value: MsgEnableIDORequest) {
      return {
        typeUrl: "/nebula.ido.MsgEnableIDORequest",
        value: MsgEnableIDORequest.toJSON(value)
      };
    },

    commitParticipation(value: MsgCommitParticipationRequest) {
      return {
        typeUrl: "/nebula.ido.MsgCommitParticipationRequest",
        value: MsgCommitParticipationRequest.toJSON(value)
      };
    }

  },
  fromJSON: {
    enableIDO(value: any) {
      return {
        typeUrl: "/nebula.ido.MsgEnableIDORequest",
        value: MsgEnableIDORequest.fromJSON(value)
      };
    },

    commitParticipation(value: any) {
      return {
        typeUrl: "/nebula.ido.MsgCommitParticipationRequest",
        value: MsgCommitParticipationRequest.fromJSON(value)
      };
    }

  },
  fromPartial: {
    enableIDO(value: MsgEnableIDORequest) {
      return {
        typeUrl: "/nebula.ido.MsgEnableIDORequest",
        value: MsgEnableIDORequest.fromPartial(value)
      };
    },

    commitParticipation(value: MsgCommitParticipationRequest) {
      return {
        typeUrl: "/nebula.ido.MsgCommitParticipationRequest",
        value: MsgCommitParticipationRequest.fromPartial(value)
      };
    }

  }
};