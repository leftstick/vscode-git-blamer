import { Item } from './model';
import { formatDate } from './utils';

export function parse(str: string): Array<Item> {
    const lines = str.replace(/\r\n/mg, '\n').split('\n');

    const commits: Array<Item> = [];

    let commit;

    for (let i = 0; i < lines.length - 1; i++) {
        const line = lines[i];

        if (/^[a-z0-9]{15,}/.test(line)) {
            commit = {};
            commits.push(commit);
            commit.hash = line.split(' ')[0];
            commit.shortHash = commit.hash.substring(0, 8);

        } else if (/^author\s/.test(line)) {
            commit.author = line.split(' ')[1];
        } else if (/^author-mail\s/.test(line)) {
            commit.authorEmail = line.split(' ')[1];
        } else if (/^author-time\s/.test(line)) {
            commit.authorTime = +line.split(' ')[1];
        } else if (/^author-tz\s/.test(line)) {
            commit.authorTz = line.split(' ')[1];
        } else if (/^committer\s/.test(line)) {
            commit.committer = line.split(' ')[1];
        } else if (/^committer-mail\s/.test(line)) {
            commit.committerEmail = line.split(' ')[1];
        } else if (/^committer-time\s/.test(line)) {
            commit.committerTime = +line.split(' ')[1];
        } else if (/^committer-tz\s/.test(line)) {
            commit.committerTz = line.split(' ')[1];
        } else if (/^previous\s/.test(line)) {
            commit.previousCommit = line.split(' ')[1];
        } else if (/^filename\s/.test(line)) {
            commit.fileName = line.split(' ')[1];
        } else if (!commit.fileName) {
            commit.commitMessage = line;
        } else {
            commit.change = line;
        }
    }

    return commits;
}

export function pretty(commits: Array<Item>): string {
    return commits.map(c => {
        return `${c.shortHash} ${c.author} ${formatDate(c.authorTime * 1000)} "${c.commitMessage}" ${c.change}`;
    })
        .join('\n');
}
