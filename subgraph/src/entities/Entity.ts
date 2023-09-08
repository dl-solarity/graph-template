import { BigInt, Bytes } from "@graphprotocol/graph-ts";
import { Entity } from "../../generated/schema";

export function getEntity(id: Bytes): Entity {
  if (entityExists(id)) {
    const entity = Entity.load(id);

    return entity;
  } else {
    throw new Error("Entity doesn't exist");
  }
}

export function createEntity(id: Bytes, arg: BigInt): Entity {
  if (!entityExists(id)) {
    const entity = new Entity(id);
    // entity.field = arg;

    return entity;
  } else {
    throw new Error("Entity already exists");
  }
}

export function getOrCreateEntity(id: Bytes, optionalArg: BigInt = BigInt.zero()): Entity {
  if (entityExists(id)) {
    return Entity.load(id);
  } else {
    return createEntity(id, optionalArg);
  }
}

export function entityExists(id: Bytes): bool {
  return Entity.load(id) != null;
}
