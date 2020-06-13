// source: proto/rippleapi/account.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.rippleapi.account.RequestGetAccountInfo', null, global);
goog.exportSymbol('proto.rippleapi.account.ResponseGetAccountInfo', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rippleapi.account.RequestGetAccountInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rippleapi.account.RequestGetAccountInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rippleapi.account.RequestGetAccountInfo.displayName = 'proto.rippleapi.account.RequestGetAccountInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rippleapi.account.ResponseGetAccountInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rippleapi.account.ResponseGetAccountInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rippleapi.account.ResponseGetAccountInfo.displayName = 'proto.rippleapi.account.ResponseGetAccountInfo';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rippleapi.account.RequestGetAccountInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.rippleapi.account.RequestGetAccountInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rippleapi.account.RequestGetAccountInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rippleapi.account.RequestGetAccountInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rippleapi.account.RequestGetAccountInfo}
 */
proto.rippleapi.account.RequestGetAccountInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rippleapi.account.RequestGetAccountInfo;
  return proto.rippleapi.account.RequestGetAccountInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rippleapi.account.RequestGetAccountInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rippleapi.account.RequestGetAccountInfo}
 */
proto.rippleapi.account.RequestGetAccountInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rippleapi.account.RequestGetAccountInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rippleapi.account.RequestGetAccountInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rippleapi.account.RequestGetAccountInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rippleapi.account.RequestGetAccountInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.rippleapi.account.RequestGetAccountInfo.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.rippleapi.account.RequestGetAccountInfo} returns this
 */
proto.rippleapi.account.RequestGetAccountInfo.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rippleapi.account.ResponseGetAccountInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.rippleapi.account.ResponseGetAccountInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rippleapi.account.ResponseGetAccountInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rippleapi.account.ResponseGetAccountInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    sequence: jspb.Message.getFieldWithDefault(msg, 1, 0),
    xrpbalance: jspb.Message.getFieldWithDefault(msg, 2, ""),
    ownercount: jspb.Message.getFieldWithDefault(msg, 3, 0),
    previousaffectingtransactionid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    previousaffectingtransactionledgerversion: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rippleapi.account.ResponseGetAccountInfo}
 */
proto.rippleapi.account.ResponseGetAccountInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rippleapi.account.ResponseGetAccountInfo;
  return proto.rippleapi.account.ResponseGetAccountInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rippleapi.account.ResponseGetAccountInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rippleapi.account.ResponseGetAccountInfo}
 */
proto.rippleapi.account.ResponseGetAccountInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSequence(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setXrpbalance(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setOwnercount(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPreviousaffectingtransactionid(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setPreviousaffectingtransactionledgerversion(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rippleapi.account.ResponseGetAccountInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rippleapi.account.ResponseGetAccountInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rippleapi.account.ResponseGetAccountInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rippleapi.account.ResponseGetAccountInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSequence();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getXrpbalance();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getOwnercount();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getPreviousaffectingtransactionid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getPreviousaffectingtransactionledgerversion();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
};


/**
 * optional uint64 sequence = 1;
 * @return {number}
 */
proto.rippleapi.account.ResponseGetAccountInfo.prototype.getSequence = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.rippleapi.account.ResponseGetAccountInfo} returns this
 */
proto.rippleapi.account.ResponseGetAccountInfo.prototype.setSequence = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string xrpBalance = 2;
 * @return {string}
 */
proto.rippleapi.account.ResponseGetAccountInfo.prototype.getXrpbalance = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.rippleapi.account.ResponseGetAccountInfo} returns this
 */
proto.rippleapi.account.ResponseGetAccountInfo.prototype.setXrpbalance = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint64 ownerCount = 3;
 * @return {number}
 */
proto.rippleapi.account.ResponseGetAccountInfo.prototype.getOwnercount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.rippleapi.account.ResponseGetAccountInfo} returns this
 */
proto.rippleapi.account.ResponseGetAccountInfo.prototype.setOwnercount = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string previousAffectingTransactionID = 4;
 * @return {string}
 */
proto.rippleapi.account.ResponseGetAccountInfo.prototype.getPreviousaffectingtransactionid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.rippleapi.account.ResponseGetAccountInfo} returns this
 */
proto.rippleapi.account.ResponseGetAccountInfo.prototype.setPreviousaffectingtransactionid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional uint64 previousAffectingTransactionLedgerVersion = 5;
 * @return {number}
 */
proto.rippleapi.account.ResponseGetAccountInfo.prototype.getPreviousaffectingtransactionledgerversion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.rippleapi.account.ResponseGetAccountInfo} returns this
 */
proto.rippleapi.account.ResponseGetAccountInfo.prototype.setPreviousaffectingtransactionledgerversion = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


goog.object.extend(exports, proto.rippleapi.account);