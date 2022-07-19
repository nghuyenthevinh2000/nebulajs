import { Coin } from "../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, toTimestamp, Long, fromTimestamp, fromJsonTimestamp } from "@osmonauts/helpers";
export interface AllocationLimit {
  denom: string;
  lowerLimit: Coin;
  upperLimit: Coin;
}
export interface IDO {
  /** Project unique id of each project */
  projectId: Long;
  tokenForDistribution: Coin[];
  totalDistributedAmount: Coin[];
  tokenListingPrice: Coin[];
  idoStatus: Long;
  allocationLimit: AllocationLimit[];

  /** Begin time for this ido */
  startTime: Date;
}

function createBaseAllocationLimit(): AllocationLimit {
  return {
    denom: "",
    lowerLimit: undefined,
    upperLimit: undefined
  };
}

export const AllocationLimit = {
  encode(message: AllocationLimit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    if (message.lowerLimit !== undefined) {
      Coin.encode(message.lowerLimit, writer.uint32(18).fork()).ldelim();
    }

    if (message.upperLimit !== undefined) {
      Coin.encode(message.upperLimit, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AllocationLimit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllocationLimit();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        case 2:
          message.lowerLimit = Coin.decode(reader, reader.uint32());
          break;

        case 3:
          message.upperLimit = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AllocationLimit {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      lowerLimit: isSet(object.lowerLimit) ? Coin.fromJSON(object.lowerLimit) : undefined,
      upperLimit: isSet(object.upperLimit) ? Coin.fromJSON(object.upperLimit) : undefined
    };
  },

  toJSON(message: AllocationLimit): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.lowerLimit !== undefined && (obj.lowerLimit = message.lowerLimit ? Coin.toJSON(message.lowerLimit) : undefined);
    message.upperLimit !== undefined && (obj.upperLimit = message.upperLimit ? Coin.toJSON(message.upperLimit) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<AllocationLimit>): AllocationLimit {
    const message = createBaseAllocationLimit();
    message.denom = object.denom ?? "";
    message.lowerLimit = object.lowerLimit !== undefined && object.lowerLimit !== null ? Coin.fromPartial(object.lowerLimit) : undefined;
    message.upperLimit = object.upperLimit !== undefined && object.upperLimit !== null ? Coin.fromPartial(object.upperLimit) : undefined;
    return message;
  }

};

function createBaseIDO(): IDO {
  return {
    projectId: Long.UZERO,
    tokenForDistribution: [],
    totalDistributedAmount: [],
    tokenListingPrice: [],
    idoStatus: Long.UZERO,
    allocationLimit: [],
    startTime: undefined
  };
}

export const IDO = {
  encode(message: IDO, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.projectId.isZero()) {
      writer.uint32(8).uint64(message.projectId);
    }

    for (const v of message.tokenForDistribution) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.totalDistributedAmount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.tokenListingPrice) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    if (!message.idoStatus.isZero()) {
      writer.uint32(40).uint64(message.idoStatus);
    }

    for (const v of message.allocationLimit) {
      AllocationLimit.encode(v!, writer.uint32(50).fork()).ldelim();
    }

    if (message.startTime !== undefined) {
      Timestamp.encode(toTimestamp(message.startTime), writer.uint32(58).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IDO {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIDO();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.projectId = (reader.uint64() as Long);
          break;

        case 2:
          message.tokenForDistribution.push(Coin.decode(reader, reader.uint32()));
          break;

        case 3:
          message.totalDistributedAmount.push(Coin.decode(reader, reader.uint32()));
          break;

        case 4:
          message.tokenListingPrice.push(Coin.decode(reader, reader.uint32()));
          break;

        case 5:
          message.idoStatus = (reader.uint64() as Long);
          break;

        case 6:
          message.allocationLimit.push(AllocationLimit.decode(reader, reader.uint32()));
          break;

        case 7:
          message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): IDO {
    return {
      projectId: isSet(object.projectId) ? Long.fromString(object.projectId) : Long.UZERO,
      tokenForDistribution: Array.isArray(object?.tokenForDistribution) ? object.tokenForDistribution.map((e: any) => Coin.fromJSON(e)) : [],
      totalDistributedAmount: Array.isArray(object?.totalDistributedAmount) ? object.totalDistributedAmount.map((e: any) => Coin.fromJSON(e)) : [],
      tokenListingPrice: Array.isArray(object?.tokenListingPrice) ? object.tokenListingPrice.map((e: any) => Coin.fromJSON(e)) : [],
      idoStatus: isSet(object.idoStatus) ? Long.fromString(object.idoStatus) : Long.UZERO,
      allocationLimit: Array.isArray(object?.allocationLimit) ? object.allocationLimit.map((e: any) => AllocationLimit.fromJSON(e)) : [],
      startTime: isSet(object.startTime) ? fromJsonTimestamp(object.startTime) : undefined
    };
  },

  toJSON(message: IDO): unknown {
    const obj: any = {};
    message.projectId !== undefined && (obj.projectId = (message.projectId || Long.UZERO).toString());

    if (message.tokenForDistribution) {
      obj.tokenForDistribution = message.tokenForDistribution.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.tokenForDistribution = [];
    }

    if (message.totalDistributedAmount) {
      obj.totalDistributedAmount = message.totalDistributedAmount.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.totalDistributedAmount = [];
    }

    if (message.tokenListingPrice) {
      obj.tokenListingPrice = message.tokenListingPrice.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.tokenListingPrice = [];
    }

    message.idoStatus !== undefined && (obj.idoStatus = (message.idoStatus || Long.UZERO).toString());

    if (message.allocationLimit) {
      obj.allocationLimit = message.allocationLimit.map(e => e ? AllocationLimit.toJSON(e) : undefined);
    } else {
      obj.allocationLimit = [];
    }

    message.startTime !== undefined && (obj.startTime = message.startTime.toISOString());
    return obj;
  },

  fromPartial(object: DeepPartial<IDO>): IDO {
    const message = createBaseIDO();
    message.projectId = object.projectId !== undefined && object.projectId !== null ? Long.fromValue(object.projectId) : Long.UZERO;
    message.tokenForDistribution = object.tokenForDistribution?.map(e => Coin.fromPartial(e)) || [];
    message.totalDistributedAmount = object.totalDistributedAmount?.map(e => Coin.fromPartial(e)) || [];
    message.tokenListingPrice = object.tokenListingPrice?.map(e => Coin.fromPartial(e)) || [];
    message.idoStatus = object.idoStatus !== undefined && object.idoStatus !== null ? Long.fromValue(object.idoStatus) : Long.UZERO;
    message.allocationLimit = object.allocationLimit?.map(e => AllocationLimit.fromPartial(e)) || [];
    message.startTime = object.startTime ?? undefined;
    return message;
  }

};