import Debug "mo:base/Debug";
import Int "mo:base/Int";
import Text "mo:base/Text";
import TrieMap "mo:base/TrieMap";
import Hash "mo:base/Hash";
import Array "mo:base/Array";
import Heap "mo:base/Heap";
import Iter "mo:base/Iter";
import Order "mo:base/Order";

actor {

    var details = TrieMap.TrieMap<Text, Text>(Text.equal, Text.hash);

    public func add(name : Text, type1 : Text) {
        details.put(name, type1);
    };

    public query func get(name : Text) : async Text {
        switch (details.get(name)) {
            case null return "";
            case (?w) return w;
        };
    };
};
