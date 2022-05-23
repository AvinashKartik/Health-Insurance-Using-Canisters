import Debug "mo:base/Debug";
import Int "mo:base/Int";
import Text "mo:base/Text";
import TrieMap "mo:base/TrieMap";
import Hash "mo:base/Hash";
import Deque "mo:base/Deque";

actor {

    class Hospital() {
        var claims = Deque.empty<Text>();

        public func addClaim(name : Text) {
            claims := Deque.pushBack(claims, name);
        };

        public func removeClaim() {
            switch (Deque.popFront(claims)) {
                case (?(x, y)) claims := y;
                case null return;
            };
        };

        public func getClaim() : Text {
            switch (Deque.peekFront(claims)) {
                case (?x) return x;
                case null return "";
            };
        };
    };

    var hospitals = TrieMap.TrieMap<Text, Hospital>(Text.equal, Text.hash);

    public func addHospital(name : Text) {
        hospitals.put(name, Hospital());
    };

    public func addClaim(name : Text, userName : Text) {
        switch (hospitals.get(name)) {
            case null {return};
            case (?hospital) {
                hospital.addClaim(userName);
                hospitals.put(name, hospital);
            };
        };
    };

    public func removeClaim(name : Text) {
        switch (hospitals.get(name)) {
            case null {return};
            case (?hospital) {
                hospital.removeClaim();
                hospitals.put(name, hospital);
            };
        };
    };

    public query func getClaim(name : Text) : async Text {
        switch (hospitals.get(name)) {
            case null {return ""};
            case (?hospital) {
                return hospital.getClaim();
            };
        };
    };
};
