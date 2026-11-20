export {};
/*
 * Heterogeneous Enum
 *
 * An enum can contain a combination of string and numeric values.
 */

enum Status {
    Maybe = 'Maybe',
    HighlyLikely = 'Highly Likely',
    No = 0,
    Yes, // 1 (incremented from the previous numeric member)
}

console.log(Status.Maybe); // Maybe
console.log(Status.HighlyLikely); // Highly Likely
console.log(Status.No); // 0
console.log(Status.Yes); // 1

/*
 * The automatic increment above works because
 * Yes follows a numeric enum member.
 * However, consider example below:
 */
enum StatusNew {
    No = 0,
    Maybe = 'Maybe',
    // Yes, // ❌ Not allowed. Error: Enum member must have initializer.
}

console.log(StatusNew);