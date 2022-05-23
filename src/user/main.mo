import Debug "mo:base/Debug";
import Int "mo:base/Int";
import Text "mo:base/Text";
import TrieMap "mo:base/TrieMap";
import Hash "mo:base/Hash";

actor {

    class User() {
        class Insurance() {
            public var isActive : Int = 0;
            public var deductible : Text = "";
            public var coinsurance : Text = "";
            public var companyName : Text = "";
        };

        class Claim() {
            public var hospitalName : Text = "";
            public var cause : Text = "";
            public var amount : Text = "";
        };

        var insuranceDetails = Insurance();
        var insuranceClaim = Claim();
        var claimed : Int = 0;

        public func hasInsurance() : Int {
            return insuranceDetails.isActive;
        };

        public func buyInsurance(deductible : Text, coinsurance : Text, companyName : Text) {
            if (hasInsurance() == 1) return;
            insuranceDetails.isActive := 1;
            insuranceDetails.deductible := deductible;
            insuranceDetails.coinsurance := coinsurance;
            insuranceDetails.companyName := companyName;
        };

        public func getInsurance() : Text {
            if (hasInsurance() == 0) return "";
            return insuranceDetails.deductible # "+" # insuranceDetails.coinsurance # "+" # insuranceDetails.companyName;
        };

        public func claimInsurance(hospitalName : Text, cause :Text, amount : Text) {
            if (hasInsurance() == 0) return;
            if (claimed == 1) return;
            claimed := 1;
            insuranceClaim.hospitalName := hospitalName;
            insuranceClaim.cause := cause;
            insuranceClaim.amount := amount;
        };

        public func removeClaim() {
            claimed := 0;
        };

        public func getClaim() : Text {
            if (claimed == 0) return "";
            return insuranceClaim.hospitalName # "+" # insuranceClaim.cause # "+" # insuranceClaim.amount;
        };

        public func hasClaimed() : Int {
            return claimed;
        };
    };

    var users = TrieMap.TrieMap<Text, User>(Text.equal, Text.hash);

    public func addUser(name : Text) {
        users.put(name, User());
    };

    public func buyInsurance(name : Text, deductible : Text, coinsurance : Text, companyName : Text) {
        switch (users.get(name)) {
            case null {return};
            case (?user) {
                user.buyInsurance(deductible, coinsurance, companyName);
                users.put(name, user);
            };
        };
    };

    public query func getInsurance(name : Text) : async Text {
        switch (users.get(name)) {
            case null {return ""};
            case (?user) {
                return user.getInsurance();
            };
        };
    };

    public query func hasInsurance(name : Text) : async Int {
        switch (users.get(name)) {
            case null {return 0};
            case (?user) {
                return user.hasInsurance();
            };
        };
    };

    public func addClaim(name : Text, hospitalName : Text, cause :Text, amount : Text) {
        switch (users.get(name)) {
            case null {return};
            case (?user) {
                user.claimInsurance(hospitalName, cause, amount);
                users.put(name, user);
            };
        };
    };

    public func removeClaim(name : Text) {
        switch (users.get(name)) {
            case null {return};
            case (?user) {
                user.removeClaim();
                users.put(name, user);
            };
        };
    };

    public query func getClaim(name : Text) : async Text {
        switch (users.get(name)) {
            case null {return ""};
            case (?user) {
                return user.getClaim();
            };
        };
    };

    public query func hasClaimed(name : Text) : async Int {
        switch (users.get(name)) {
            case null {return 0};
            case (?user) {
                return user.hasClaimed();
            };
        };
    };
};
