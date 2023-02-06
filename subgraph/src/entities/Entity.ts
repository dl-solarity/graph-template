import { BigInt, Bytes, Entity } from "@graphprotocol/graph-ts";

export function getEntity(id: Bytes, optionalArg: BigInt = BigInt.zero()): Entity {
  if (isExistEntity(id)) {
    const entity = Entity.load(id);
    return entity;
  } else {
    throw new Error("Entity doesn't exist");
  }
}

export function createEntity(id: Bytes, arg: BigInt): Entity {
  if (!isExistEntity(id)) {
    entity = new Entity(id);
    return entity;
  } else {
    throw new Error("Entity already exists");
  }
}

export function getOrCreateEntity(id: Bytes, optionalArg: BigInt = BigInt.zero()): Entity {
  if (isExistEntity(id)) {
    return Entity.load(entity);
  } else {
    return createEntity(id, optionalArg);
  }
}

export function isExistEntity(id: Bytes): bool {
  return Entity.load(id) != null;
}
